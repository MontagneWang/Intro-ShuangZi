export default function createObserver(targetElement: HTMLDivElement, callback: Function) {
  const observer = new IntersectionObserver((entries) => {
    /**
      * 当元素出现在视窗内时触发
      * 使用 异步 与 Promise 来解决 setTimeout 的嵌套问题
      * 通过在添加	animation-delay 实现延迟，而不是 setTimeOut（会存在系统与性能误差）
      */
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        await callback();
      }
    });
  });

  observer.observe(targetElement);
};

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}