import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "1GB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async ({ file }) => {
    // This code RUNS ON YOUR SERVER after upload

    const url = file.ufsUrl;

    console.log("file url", url);
    return { url };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
