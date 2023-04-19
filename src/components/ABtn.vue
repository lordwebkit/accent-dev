<template>
  <button class="a-btn">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.a-btn {
  width: 100%;
  background: #2dc574;
  border: 0.1rem solid transparent;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
  outline: none;
  padding: 14px;
  text-align: center;
  transition: all .3s;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background: #26a763;
  }

  &:active {
    background: #229457;
  }

  @media (max-width: 970px) {
    font-size: 14px;
  }

  @media (max-width: 970px) {
    padding: 10px 5px;
  }
}</style>