export namespace InstructorsActions {
  export class FetchList {
    static readonly type = '[Fetch] Get';
  }

  export class FetchWithQuery {
    static readonly type = '[Fetch] Get With Query';
    constructor(public query: string) {}
  }

  export class FetchDetails {
    static readonly type = '[Fetch] Get Details';
    constructor(public id: string) {}
  }
}
