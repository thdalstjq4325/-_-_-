JavaScript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 아래 '본인의-레포지토리-이름' 부분을 깃허브에 만든 실제 저장소 이름으로 변경하세요!
  base: '/matching-app/', 
})
