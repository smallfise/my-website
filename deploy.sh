#!/bin/bash

cd "$(dirname "$0")"

# 检查是否有改动
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "没有改动，无需发布。"
  exit 0
fi

# 自动生成 commit message
CHANGED_FILES=$(git diff --name-only; git diff --cached --name-only; git ls-files --others --exclude-standard)
FILE_LIST=$(echo "$CHANGED_FILES" | grep -E '\.(md|mts|ts|css|json)$' | head -5 | tr '\n' ', ' | sed 's/,$//')
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')

if [ -n "$FILE_LIST" ]; then
  MSG="更新 ${FILE_LIST} - ${TIMESTAMP}"
else
  MSG="更新内容 - ${TIMESTAMP}"
fi

# 提交并推送
git add .
git commit -m "$MSG"
git push

echo ""
echo "✓ 已发布！Cloudflare 将在约 1 分钟内自动部署。"
echo "  commit: $MSG"
