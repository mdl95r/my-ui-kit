<template>
  <div class="ui-pagination">
    <Button
      icon-left="angle-left"
      variant="clear"
      shape="square"
      size="lg"
      class="ui-pagination__arrow-left"
      :disabled="isStart"
      @click="onItemHandler(currentPage - 1)"
    />

    <ul class="ui-pagination__list">
      <li
        v-for="(page, i) in paginationRange"
        :key="`${page}-${i}`"
        class="ui-pagination__item"
        :class="{ 'ui-pagination__item_active': page === currentPage }"
        @click="onItemHandler(page)"
      >
        <template v-if="page === DOTS">
          <span>&#8230;</span>
        </template>

        <template v-else>
          {{ page }}
        </template>
      </li>
    </ul>

    <Button
      icon-left="angle-right"
      variant="clear"
      shape="square"
      size="lg"
      class="ui-pagination__arrow-right"
      :disabled="isEnd"
      @click="onItemHandler(currentPage + 1)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Button from '../Button';

const props = defineProps({
  /**
   * Текущая страница
   */
  currentPage: {
    type: Number,
    default: 1,
  },

  /**
   * Общее количество страниц
   */
  total: {
    type: Number,
    required: true,
  },

  /**
   * Размер одной страницы
   */
  pageSize: {
    type: Number,
    default: 10,
  },

  /**
   * Сколько будет показываться элементов страниц от текущей страницы
   */
  siblingCount: {
    type: Number,
    default: 2,
  },

  dots: {
    type: String,
    default: '...',
  }
});

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const FIRST_PAGE = 1;
const CURRENT_PAGE = 1;
const LAST_PAGE = 2;
const PAGES = FIRST_PAGE + CURRENT_PAGE + LAST_PAGE;
const TWO_DOTS = 2;

const totalPageCount = computed(() => Math.ceil(props.total / props.pageSize));

const paginationRange = computed(() => {
  const leftSiblingIndex = Math.max(props.currentPage - props.siblingCount, 1);
  const rightSiblingIndex = Math.min(props.currentPage + props.siblingCount, totalPageCount.value);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount.value - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount.value;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = TWO_DOTS * props.siblingCount + PAGES;
    let leftRange = range(1, leftItemCount);

    return [...leftRange, props.dots, totalPageCount.value];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = TWO_DOTS * props.siblingCount + PAGES;
    let rightRange = range(
      totalPageCount.value - rightItemCount + 1,
      totalPageCount.value
    );
    return [firstPageIndex, props.dots, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, props.dots, ...middleRange, props.dots, lastPageIndex];
  }

  return range(1, totalPageCount.value);
});

const emit = defineEmits(['update:currentPage']);

const onItemHandler = (page) => {
  emit('update:currentPage', page);
}

const isStart = computed(() => props.currentPage === 1);
const isEnd = computed(() => props.currentPage === totalPageCount.value);
</script>

<style lang="scss" scoped>
@use './Pagination.scss';
</style>
