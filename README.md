Expo Router Protected Routes Demo
A React Native demo showcasing secure and organized navigation using Expo Router.

## Features

- File-based routing with Expo Router for intuitive navigation

- Layouts and groups for route organization and separation (e.g., auth vs main areas)

- Route protection with conditional Redirects for authentication and role-based access

- Live navigation panel for testing access to all screens easily

- Simple fake authentication context for demo purposes

- Clean and minimal styling for clear UI feedback

## Project Structure

```
/app
  ├── _layout.tsx            # Root layout with AuthProvider and navigation stack
  ├── context/
  │   └── AuthContext.tsx    # Authentication state and logic
  ├── (auth)/                # Public routes (login/register)
  ├── (main)/                # Protected routes (profile, dashboard, settings, admin)
  └── modal.tsx              # Navigation buttons panel for manual testing
```

## Screens

- Login & Register: Public access for authentication

- Profile, Dashboard, Settings: Accessible for logged-in users

- Admin: Admin-only screen with role check

## How Route Protection Works

- Routes under (main)/ are wrapped in conditional logic:

- If the user is not authenticated, they get redirected to the (main)/index page.

- If the user lacks the admin role, access to the admin screen is blocked and redirected to the (main)/index page.

- This uses Expo Router’s <Stack.Protected> guard inside the (main)/\_layout.txs file.
