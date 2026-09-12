export function openAdmissionModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-lead-modal"));
  }
}
