# Website for the Rolczynski Group at the University of Nevada, Reno

## Running the site locally
1. In Terminal, navigate to the directory where you want to clone the repo
1. Clone it: `git clone https://github.com/rolczynskis/brian-lab-website.git`
1. Navigate to the cloned repo: `cd brian-lab-website`
1. Run the local server: `npx @11ty/eleventy --serve`
1. Open http://localhost:8080 in a browser
1. Open the source code in an editor such as Sublime or TextEdit
1. Make changes and save the file. The server should automatically reload the site
1. Once your changes look good, commit them:
```
git add .
git commit -m "<message such as 'added CV' etc>"
git push
```

## Making updates

### Update news feed
Under `src/_includes/newsfeed.md` add new content in [markdown format](https://www.markdownguide.org/cheat-sheet/)

### Add new team members
Under `src/_data/teamMembers.json`, add a new item with the following format:
```
{
    "name": "Brian Rolczynski",
    "title": "Assistant Professor, Chemistry",
    "degrees": [
      "PhD Chemistry, Northwestern University (2013)",
      "BS Chemistry, University of Washington (2007)",
      "BA English, University of Washington (2007)"
    ],
    "linkedIn": "brolczynski",
    "orcid": "0000-0002-8783-1266",
    "image": "Brian.jpeg",
    "cv": "brolczynski.pdf",
    "google_scholar": "<google scholar url>"
  }
```

### Update current opportunities
Under `src/_data/currentOpportunities.json`, add or remove an item in the array of titles

### Update CVs
Replace the file in `assets/cvs/<cv file name>`
