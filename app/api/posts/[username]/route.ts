import { ThreadsAPI } from "threads-api";
import { NextResponse } from "next/server";
export const GET = async (req: Request) => {
  const threadsAPI = new ThreadsAPI();
  const username = req.url.slice(req.url.lastIndexOf("/") + 1);
  const userID = "7695520761";

  try {
    const userID = await threadsAPI.getUserIDfromUsername(username);
    if (!userID) {
      return;
    }
    // const user = await threadsAPI.getUserProfile(username, tempID);
    const posts = await threadsAPI.getUserProfileThreads(username, userID);
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.error();
  }
};
