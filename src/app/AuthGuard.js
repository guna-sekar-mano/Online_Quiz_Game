'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "./authStore";

const AuthGuard = () => {
  const { isLogin } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin, router]);

  return isLogin;
};

export default AuthGuard;
