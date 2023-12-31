# Project Name

<div align="center">
  <h2>SnapShare</h2>
</div>
## Getting Started

### Prerequisites

- Node.js
- npm
- Next js

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git

cd your-project

npm install
```
2. Create env folder:

```bash 
mkdir .env file in the root of your project and add the following variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= 
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_BASE_URL=https://snapxshare.vercel.app/

RESEND_API_KEY=
```
### Development

Run the development server:
` npm run dev
`

Open `http://localhost:3000` in your browser.
### Deployment

To deploy your project, you can use platforms like Vercel, Netlify, or others that support Next.js deployments.

### Resend Email API

The project includes an API endpoint for resending emails. Here's how to use it:

`curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_API_KEY" https://your-api-endpoint/resend-email`

Replace `YOUR_API_KEY` with the actual API key and `https://your-api-endpoint` with the URL of your API endpoint.

### Contributing

If you'd like to contribute, please follow these steps:

- Fork the repository

- Create a new branch (git checkout -b feature/your-feature)

- Make changes and commit them (git commit -am 'Add some feature')

- Push to the branch (git push origin feature/your-feature)

- Create a new Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.


Remember to customize the placeholders such as `Project Name`, `your-username`, `your-project`, `YOUR_API_KEY`, and `https://your-api-endpoint` with your actual project information. Adjust the instructions based on the actual commands and structure of your project.
