// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from "../components";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const status = useSelector((state) => state.auth.status);
//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []);

//   if (!status) {
//     return (
//       <div className="w-full py-8 mt-4 text-center">
//         <Container>
//           <div className="flex flex-wrap">
//             <div className="p-2 w-full">
//               <Link to={`/login`}>
//                 <h1 className="text-2xl font-bold hover:text-gray-500">
//                   Login to read posts
//                 </h1>
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </div>
//     );
//   }

//   if (posts.length === 0) {
//     return (
//       <div className="w-full py-8 mt-4 text-center">
//         <Container>
//           <div className="flex flex-wrap">
//             <div className="p-2 w-full">
//               <Link to={`/add-post`}>
//                 <h1 className="text-2xl font-bold hover:text-gray-500">
//                   There are no blogs.<br></br> Click here to create one
//                 </h1>
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </div>
//     );
//   }
//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className="flex flex-wrap">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (!status) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Container>
          <div className="text-center">
            <Link
              to={`/login`}
              className="text-blue-600 hover:text-orange-500 text-2xl font-semibold"
            >
              Login to read posts
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Container>
          <div className="text-center">
            <Link
              to={`/add-post`}
              className="text-blue-600 hover:underline text-2xl font-semibold"
            >
              No blogs available. <br /> Click here to create one.
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
