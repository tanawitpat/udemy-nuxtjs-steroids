<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'First Post',
            previewText: 'This is our first post!',
            thumbnail:
              'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80'
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'This is our second post!',
            thumbnail:
              'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80'
          },
          {
            id: '3',
            title: 'Third Post',
            previewText: 'This is our third post!',
            thumbnail:
              'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80'
          }
        ]
      })
    }, 1500)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
