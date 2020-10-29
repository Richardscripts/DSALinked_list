class memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  allocate(size) {
    if (this.head + size > this.memory.length) {
      console.log('No need to re-allocate');
      return null;
    }
    let start = this.head;
    console.log('old memory head:', this.head);
    this.head += size;
    console.log('memory head after allocate:', this.head);
    return start;
  }

  free(ptr) {}

  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  get(ptr) {
    return this.memory[ptr];
  }

  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = memory;
