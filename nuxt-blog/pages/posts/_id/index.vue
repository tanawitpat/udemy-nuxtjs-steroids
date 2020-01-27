<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div>Last updated on {{ loadedPost.updatedDate }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p>Content of the post</p>
      <div class>
        Let me know what you think about the post, send a mail to
        <a
          href="mailto:tanawit.pat@gmail.com"
        >tanawit.pat@gmail.com</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(
        null,
        {
          loadedPost: {
            id: '1',
            title: 'First Post (ID: ' + context.route.params.id + ')',
            previewText: 'This is our first post!',
            author: 'Tanawit',
            updatedDate: new Date(),
            content: "Hi, I'm Tanawit. This is my first post :)"
          }
        },
        1000
      )
    })
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
