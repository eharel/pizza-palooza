export type ActionResults<TData = undefined, TError = undefined> =
  | { success: true; data: TData }
  | { success: false; errors: TError };
