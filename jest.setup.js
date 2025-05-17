import '@testing-library/jest-dom';

class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() { return []; }
    unobserve() {}
  }
  
  global.IntersectionObserver = IntersectionObserver;
  