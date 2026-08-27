@echo off
setlocal
cd /d "%~dp0App"
start "" "%ComSpec%" /k "npm run dev"
