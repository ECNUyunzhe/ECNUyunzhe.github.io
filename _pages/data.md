---
layout: page
permalink: /data/
title: "<span class='nav-cn'>数据</span><span class='nav-en'>Data</span>"
description: 课程练习与研究示例数据集 (Datasets for Practice & Research)
nav: true
nav_order: 5

# --- 数据集信息 (类似你的 Course Schedule) ---
datasets:
  - name: "上海市边界"
    desc: "上海市行政边界底图数据"
    icon: "fa-solid fa-map-location-dot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/shanghai_boundary.geojson"
    
  - name: "微博采样数据"
    desc: "Weibo 采样数据 (4% 比例)"
    icon: "fa-solid fa-chart-line"
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/weibo_sample_4pct.csv"
    
  - name: "便利超市 POI"
    desc: "上海市便利店与超市空间数据"
    icon: "fa-solid fa-store"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/便利超市.geojson"
    
  - name: "公交站 POI"
    desc: "公共交通站点空间分布数据"
    icon: "fa-solid fa-bus"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公交站.geojson"
    
  - name: "公园 POI"
    desc: "城市绿地与公园空间数据"
    icon: "fa-solid fa-tree"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公园.geojson"
    
  - name: "咖啡厅 POI"
    desc: "各类咖啡馆、饮品店数据"
    icon: "fa-solid fa-mug-hot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/咖啡厅.geojson"
    
  - name: "地铁站 POI"
    desc: "轨道交通站点及出口数据"
    icon: "fa-solid fa-train-subway"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/地铁站.geojson"
    
  - name: "餐厅 POI"
    desc: "餐饮服务业空间分布数据"
    icon: "fa-solid fa-utensils"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/餐厅.geojson"
---

<div class="projects">
  <p>本页面集中提供 DAWN 课题组及相关课程的示例数据集。点击右侧按钮可直接获取托管于 GitHub 的原始数据文件。</p>

  <div class="container mt-4">
    <div class="table-responsive">
      <table class="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">数据名称 / Dataset</th>
            <th scope="col" class="d-none d-md-table-cell">类型</th>
            <th scope="col" class="text-right" style="text-align: right;">获取链接</th>
          </tr>
        </thead>
        <tbody>
          {% for data in page.datasets %}
          <tr>
            <td class="align-middle">
              <i class="{{ data.icon }}"></i> <strong>{{ data.name }}</strong> <br>
              <span style="color: var(--global-text-color-light, #6c757d); font-size: 0.85em;">{{ data.desc }}</span>
            </td>
            <td class="d-none d-md-table-cell align-middle"><code>{{ data.type }}</code></td>
            <td class="align-middle" style="text-align: right;">
              <a href="{{ data.url }}" class="badge font-weight-bold btn-outline-primary" target="_blank">Download</a>
            </td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>
</div>