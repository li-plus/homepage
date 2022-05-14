---
title: "Separable Structure Modeling for Semi-supervised Video Object Segmentation"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Wencheng Zhu
- admin
- Jiwen Lu
- Jie Zhou

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2021-02-18T00:00:00Z"
doi: "10.1109/TCSVT.2021.3060015"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-02-18T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)*
publication_short: ''

abstract: In this paper, we propose a separable structure modeling approach for semi-supervised video object segmentation. Unlike most existing methods which preclude the semantically structural information of target objects, our method not only captures pixel-level similarity relationships between the reference and target frames but also reveals the separable structure of the specified objects in target frames. Specifically, we first compute a pixel-wise similarity matrix by using representations of reference and target pixels and then select top rank reference pixels for target pixel classification. According to the prior knowledge from these top-rank reference pixels, we further appoint the representative target pixels for object structure modeling. Particularly, in the structure modeling branch, we extract the shared and individual features that can well represent the whole object and its components, respectively. Moreover, the proposed method is a fast algorithm without online fine-tuning and any post-processing. We conduct extensive experiments and ablation studies on the DAVIS-16, DAVIS-17, and YouTube-VOS datasets, and experimental results on three widely-used datasets demonstrate that our method achieves a superior performance, compared with state-of-the-art semi-supervised video object segmentation approaches in terms of speed and accuracy.

# Summary. An optional shortened abstract.
summary: We propose a separable structure modeling approach for semi-supervised video object segmentation.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/li-plus/SSM-VOS'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
