/**
 * Google OAuth Setup API
 *
 * GET /api/admin/google - Start OAuth flow (redirects to Google)
 * GET /api/admin/google?code=xxx - Handle OAuth callback
 *
 * This endpoint helps you get the GOOGLE_REFRESH_TOKEN
 * After completing the flow, add the refresh token to Vercel env vars
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  getGoogleAuthUrl,
  exchangeCodeForTokens,
} from '@/lib/blogAutomation/searchConsole';

function getRedirectUri(request: NextRequest): string {
  const url = new URL(request.url);
  return `${url.origin}/api/admin/google`;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  // Handle OAuth error
  if (error) {
    return new NextResponse(
      `<html>
        <head><title>OAuth Error</title></head>
        <body style="font-family: system-ui; padding: 40px; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">OAuth Error</h1>
          <p>Google returned an error: <strong>${error}</strong></p>
          <a href="/api/admin/google" style="color: #2563eb;">Try again</a>
        </body>
      </html>`,
      {
        headers: { 'Content-Type': 'text/html' },
      }
    );
  }

  // Handle OAuth callback with authorization code
  if (code) {
    try {
      const redirectUri = getRedirectUri(request);
      const tokens = await exchangeCodeForTokens(code, redirectUri);

      return new NextResponse(
        `<html>
          <head><title>OAuth Success</title></head>
          <body style="font-family: system-ui; padding: 40px; max-width: 800px; margin: 0 auto;">
            <h1 style="color: #16a34a;">OAuth Success!</h1>
            <p>Add this refresh token to your Vercel environment variables:</p>

            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0; font-weight: bold;">GOOGLE_REFRESH_TOKEN</p>
              <input
                type="text"
                value="${tokens.refreshToken}"
                readonly
                style="width: 100%; padding: 10px; font-family: monospace; font-size: 12px; border: 1px solid #cbd5e1; border-radius: 4px;"
                onclick="this.select(); document.execCommand('copy');"
              />
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #64748b;">Click to select and copy</p>
            </div>

            <h2>Next Steps:</h2>
            <ol style="line-height: 1.8;">
              <li>Go to <a href="https://vercel.com/dashboard" target="_blank" style="color: #2563eb;">Vercel Dashboard</a></li>
              <li>Select your project → Settings → Environment Variables</li>
              <li>Add <code>GOOGLE_REFRESH_TOKEN</code> with the value above</li>
              <li>Redeploy your application</li>
            </ol>

            <p style="margin-top: 30px;">
              <a href="/admin/blog" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                Go to Blog Admin
              </a>
            </p>
          </body>
        </html>`,
        {
          headers: { 'Content-Type': 'text/html' },
        }
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      return new NextResponse(
        `<html>
          <head><title>Token Exchange Error</title></head>
          <body style="font-family: system-ui; padding: 40px; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #dc2626;">Token Exchange Failed</h1>
            <p>Error: ${errorMessage}</p>
            <a href="/api/admin/google" style="color: #2563eb;">Try again</a>
          </body>
        </html>`,
        {
          headers: { 'Content-Type': 'text/html' },
        }
      );
    }
  }

  // No code - start OAuth flow
  try {
    const redirectUri = getRedirectUri(request);
    const authUrl = getGoogleAuthUrl(redirectUri);

    return NextResponse.redirect(authUrl);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return new NextResponse(
      `<html>
        <head><title>Configuration Error</title></head>
        <body style="font-family: system-ui; padding: 40px; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">Configuration Error</h1>
          <p>${errorMessage}</p>

          <h2>Required Environment Variables:</h2>
          <ul>
            <li><code>GOOGLE_CLIENT_ID</code></li>
            <li><code>GOOGLE_CLIENT_SECRET</code></li>
          </ul>

          <p>Add these to Vercel first, then visit this page again.</p>
        </body>
      </html>`,
      {
        headers: { 'Content-Type': 'text/html' },
      }
    );
  }
}
