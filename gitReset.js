
git log --oneline -n (只顯示n個log標籤資訊)


回到過去1 reset
1. 返回到最新版本
$git reset --hard HEAD
2. 返回到最新版本的前一個版本(倒數第二個版本)
$git reset --hard HEAD~2  (其中n為數字)
3. 返回到最新版本的前n個版本
$git reset --hard HEAD~n  (其中n為數字)
4. 依照版本號，返回某個版本
$git reset --hard 版本號 
PS. 若先前已提交過，被覆蓋掉了，只要記得版本號，都可以會到過去

回到過去2 reflog => 顯示git庫歷史紀錄(含被覆蓋的)
git reflog -n  (只顯示n行的過程紀錄)


分支
查看目前分支
$ git branch

$ git checkout 版控號碼(前四碼)
$ git checkout master   還原為最新的master版本

創立分支
$ git branch 分支名稱

切換分支
$ git checkout 分支名稱

fds