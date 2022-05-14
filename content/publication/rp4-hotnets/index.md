---
title: "In-situ Programmable Switching using rP4: Towards Runtime Data Plane Programmability"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Yong Feng
- Haoyu Song
- admin
- Zhikang Chen
- Wenquan Xu
- Bin Liu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2021-11-04T00:00:00Z"
doi: "10.1145/3484266.3487367"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-11-04T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the Twentieth ACM Workshop on Hot Topics in Networks (HotNets'21)*
publication_short: ''

abstract: The existing chip architecture and programming language are incapable of supporting in-service updates by loading or offloading on-demand protocols and functions at runtime. We examine the fundamental reasons for the inflexibility and design a new In-situ Programmable Switch Architecture (IPSA) as a fix. We further design rP4, a P4 extension, for programming IPSA-based devices. To manifest the in-situ programming feasibility, we develop an rP4 compiler and demonstrate several use cases on both a software switch, ipbm, and an FPGA-based prototype. Our preliminary experiments and analysis show that, compared to PISA, IPSA provides higher flexibility in enabling runtime functional update with limited performance and gate-count penalty. The in-situ programming capability enabled by IPSA and rP4 opens a promising design space for programmable networks.

# Summary. An optional shortened abstract.
summary: We design a new In-situ Programmable Switch Architecture (IPSA) and rP4 for programming IPSA-based devices.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
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
