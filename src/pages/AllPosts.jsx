import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false); // Stop the skeleton loader once data is fetched
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="p-2 w-1/4">
                <div className="animate-pulse bg-gray-300 rounded-lg h-40"></div>
                <div className="mt-2 animate-pulse bg-gray-300 rounded h-6"></div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <Link to={`/add-post`}>
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  There are no blogs.
                  <br /> Click here to create one.
                </h1>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
