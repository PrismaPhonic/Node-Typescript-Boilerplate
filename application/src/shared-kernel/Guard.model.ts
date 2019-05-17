/**
 * Add system wide useful guards here
 */

export class Guard {
  private setsMatch<T>(setA: Set<T>, setB: Set<T>): boolean {
    if (setA.size !== setB.size) return false;

    for (const elem of setA) {
      if (!setB.has(elem)) {
        return false;
      }
    }

    return true;
  }
}