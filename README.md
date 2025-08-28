# Mecfinity AI Solutions - React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Blog API Integration

This application now includes TanStack Query integration for blog data fetching with the following APIs:

- `GET /api/blogs/published` - Get all published blogs
- `GET /api/blogs/slug/:slug` - Get blog by slug

### API Configuration

To configure the API endpoint, create a `.env` file in the root directory and add:

```
REACT_APP_API_BASE_URL=https://blogplatform-backend-mecfinityai.vercel.app/api
```

The application is now configured to use the production API by default. You can override this by setting a different `REACT_APP_API_BASE_URL` in your `.env` file.

### Features

- **TanStack Query Integration**: Efficient caching and state management
- **Fallback Mechanism**: Uses local blog data when API is unavailable
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: Proper loading indicators during data fetching
- **SEO Optimization**: Meta tags and structured data for blog posts

### API Response Format

The application expects the following response format from the blog APIs:

```json
{
  "success": true,
  "blogs": [
    {
      "_id": "blog_id",
      "title": "Blog Title",
      "slug": "blog-slug",
      "excerpt": "Blog excerpt",
      "imageUrl": "https://example.com/image.jpg",
      "metaDescription": "SEO description",
      "metaKeywords": ["keyword1", "keyword2"],
      "content": "HTML content",
      "publishDate": "2025-01-13T00:00:00.000Z",
      "author": { "name": "Author Name" },
      "categoryId": { "name": "Category Name" },
      "tags": ["tag1", "tag2"],
      "isFeatured": false,
      "status": "published"
    }
  ],
  "totalCount": 1,
  "currentPage": 1,
  "totalPages": null
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
