import { auth } from '@clerk/nextjs/server';

const adminIds = ['user_2gSiZNTc1m4YwNdxbsq90lt82cd'];
export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
