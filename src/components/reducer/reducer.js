export const dataReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_BOOKMARK": {
      const { postId } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            isBookmarked: !post.isBookmarked,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    case "INCREMENT_UPVOTES": {
      const { postId } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            upvotes: post.upvotes + 1,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    case "DECREMENT_UPVOTES": {
      const { postId } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            upvotes: post.upvotes - 1,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    case "INCREMENT_DOWNVOTES": {
      const { postId } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            downvotes: post.downvotes + 1,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    case "DECREMENT_DOWNVOTES": {
      const { postId } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            downvotes: post.downvotes - 1,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    }
    default:
      return state;
  }
};
