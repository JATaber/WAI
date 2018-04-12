<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="(post, index) in posts" :key="index">
      <p>
        <span><b>{{ post.title}}</b></span><br>
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>
