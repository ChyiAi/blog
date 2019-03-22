---
title: "git"
---
## init
```  
git init
```
## set up your git name and email
```
git config --local user.name clongc
git config --local user.email clongc1988@163.com
git remote add origin https://github.com/DeeMoxa/blog.git
```
### store user credential
```
git config credential.helper store
```
## add folder to my staging area
```
git add FOLDERNAME
```
## commit the folder

```
git commit -m "add FOLDERNAME"
```
## Clone

```
git clone https://github.com/clone
```
### Clone the repository at "REPOSITORY" to "my_cloned_repo".

```
git clone https://github.com/clone my_cloned_repo
```
## status of someone in the files

```
git status
```
## rename move
```
git mv file_A.txt file_B.txt
git mv file_A.txt file_B.txt src
```
## investigate the log of repository
```
git log
```
## tag the current commit with 'new_tag'
```
git tag 'new_tag'
```
## push tag int remote repository
```
git push --tags origin master
```
## some files missing from the commit and add the missing file
```
git add missingfile
git commit --amend -m '修正'
```
### commit with The date
```
git commit --date=05.26.2017T15:00:00 -m anshitijiao
```
## unstage file under the situation of commit error
```
git reset HEAD fileName
```
## undo the last commit
```
git reset --soft HEAD~1
```
## checkout the file from the last commit
```
git checkout FILENAME
```
## find the remote repository
```
git remote -v
```
## pull changes from origin repository
```
git pull origin master
```
## rebase location branch from origin/master and push it
```
git rebase origin/master
//git rebase onto A B C  把B到C段的commit 提交到A  
//p.s. rebase --onto的机制是左开右闭
//即，不包含B 包含C
git push origin master
```
## there have been modifications since your last commit . find out which line
```
git diff
```
## find out anybody modify the file
```
git blame FILENAME
```
## create new branch TEST

```
git branch TEST
```
## delete the branch
```
git branch -d BRANCHNAME
```
## merge the branch to the currently branch
```
git merge BRANCHNAME
```
## get origin but don't merge it
```
git fetch origin
```
## reset HEAD origin by force.
```
git checkout .
git fetch --all
git reset --hard origin/master
// or
git fetch --all  
git reset --hard origin/master
git pull

```
