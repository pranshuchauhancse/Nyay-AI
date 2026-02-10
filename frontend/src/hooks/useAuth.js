
export function useAuth() {
  return {
    isAuthenticated: !!localStorage.getItem("token"),
    logout: () => localStorage.removeItem("token"),
  };
}
