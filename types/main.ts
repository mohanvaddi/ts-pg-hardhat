export interface CustomServerError extends Error {
  syscall: string;
  code: string;
}
