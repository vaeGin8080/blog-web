<template>
  <div class="menu">
    <ul class="menu-list">
      <li
        v-for="(nav, index) in list"
        :key="index"
        :class="{ on: activeIndex === index }"
      >
        <a :href="`#${nav.name}`" :id="nav.index">{{ nav.name }}</a>
        <div
          v-if="nav.children.length > 0 && activeIndex === index"
          　　　　　class="menu-children-list"
        >
          <ul class="nav-list">
            <li
              v-for="(item, idx) in nav.children"
              :key="idx"
              :class="{ on: childrenActiveIndex === idx }"
            >
              <a href="javascript:;">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MarkDown",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
