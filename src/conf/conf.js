const conf = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteDatabaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwriteprojectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
};

export default conf;
