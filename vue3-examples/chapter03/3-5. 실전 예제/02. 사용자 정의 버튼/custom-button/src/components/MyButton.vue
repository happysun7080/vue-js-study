<template>
  <!-- v-bind="$attrs": Non-prop의 모든 속성을 그대로 button element에 넘겨줌 -->
  <button v-bind="$attrs" :type="type" :class="classes" ref="button">
    <!-- slot: 시작태그와 종료태그 사이에 들어가는 내용이 위치하는 곳 -->
    <slot></slot>
  </button>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    type: {
      default: "button",
      validator: (value) => {
        const allowed = ["button", "submit", "reset"];
        return allowed.includes(value);
      },
    },

    // Boolean 타입은 기본값이 false
    sm: Boolean,
    md: {
      type: Boolean,
      default: true,
    },
    lg: Boolean,
    pill: Boolean,
  },

  // props: Props 속성
  // context: slots, attrs, emits
  setup(props, context) {
    const classes = [];
    const button = ref(null);

    // Props로 처리되는 변수들
    if (props.sm) {
      classes.push("sm");
    } else if (props.lg) {
      classes.push("lg");
    } else {
      classes.push("md");
    }

    if (props.pill) classes.push("pill");

    // button 변수 자체는 element를 가리키지 않고 button.value가 element를 가리킴
    // 프록시는 단일 변수를 객체화시키고 변수를 해당 객체의 value 속성에 넣기 때문
    onMounted(() => {
      // Non-prop으로 처리되는 변수들
      Object.keys(context.attrs).forEach((attr) => {
        if (attr.startsWith("text-")) {
          button.value.style.color = attr.substring(5);
        }
        if (attr.startsWith("background-")) {
          button.value.style.backgroundColor = attr.substring(11);
        }
      });
    });

    return {
      classes,
      button,
    };
  },
};
</script>

// scoped: 같은 SFC 파일에 작성된 컴포넌트에만 해당 CSS 적용
<style scpoed>
button {
  outline: none;
}

.sm {
  height: 20px;
  font-size: 13px;
}

.md {
  height: 30px;
  font-size: 22px;
}

.lg {
  height: 40px;
  font-size: 31px;
}

.pill {
  border-radius: 16px;
}
</style>