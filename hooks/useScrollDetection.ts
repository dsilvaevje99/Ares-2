export default function useScrollDetection(limit: number) {
  const scrollPosition = ref<number>(0);
  const hasScrolledPast = ref<boolean>(false);

  const updateScroll = () => {
    scrollPosition.value = window.scrollY;
    if (scrollPosition.value > limit) {
      hasScrolledPast.value = true;
    } else {
      hasScrolledPast.value = false;
    }
  };

  onMounted(() =>
    window.addEventListener("scroll", updateScroll, { passive: true })
  );

  return { hasScrolledPast };
}
