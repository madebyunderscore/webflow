/**
 * Initializes accordion functionality for elements matching the specified selector.
 * @param selector - The CSS selector for the accordion components.
 */
export function initializeAccordion(selector: string): void {
  // Select all accordion components
  const accordions = document.querySelectorAll<HTMLElement>(selector);

  accordions.forEach((accordion) => {
    const button = accordion.querySelector<HTMLElement>('.accordion_top');
    const content = accordion.querySelector<HTMLElement>('.accordion_bottom');

    if (button && content) {
      // Add event listener to the button
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Update ARIA attributes
        button.setAttribute('aria-expanded', (!isExpanded).toString());
        content.setAttribute('aria-hidden', isExpanded.toString());
      });

      // Add keyboard support
      button.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          button.click(); // Trigger the click event
        }
      });
    }
  });
}
