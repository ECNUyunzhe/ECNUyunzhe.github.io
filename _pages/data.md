---
layout: page
permalink: /data/
title: "<span class='nav-cn'>数据</span><span class='nav-en'>Data</span>"
description: 课程练习与研究示例数据集 (Datasets for Practice & Research)
nav: true
nav_order: 5

# --- 数据集信息 ---
datasets:
  - name: "上海市边界"
    desc: "上海市行政边界底图数据"
    icon: "fa-solid fa-draw-polygon"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/shanghai_boundary.geojson"
    
  - name: "微博采样数据"
    desc: "Weibo 采样数据 (4% 比例)"
    icon: "fa-solid fa-file-csv"
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/weibo_sample_4pct.csv"
    
  - name: "便利超市 POI"
    desc: "上海市便利店与超市空间数据"
    icon: "fa-solid fa-location-dot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/便利超市.geojson"
    
  - name: "公交站 POI"
    desc: "公共交通站点空间分布数据"
    icon: "fa-solid fa-location-dot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公交站.geojson"
    
  - name: "公园 POI"
    desc: "城市绿地与公园空间数据"
    icon: "fa-solid fa-location-dot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公园.geojson"
    
  - name: "咖啡厅 POI"
    desc: "各类咖啡馆、饮品店数据"
    icon: "fa-solid fa-location-dot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/咖啡厅.geojson"
    
  - name: "地铁站 POI"
    desc: "轨道交通站点及出口数据"
    icon: "fa-solid fa-location-dot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/地铁站.geojson"
    
  - name: "餐厅 POI"
    desc: "餐饮服务业空间分布数据"
    icon: "fa-solid fa-location-dot"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/餐厅.geojson"
---

<style>
  /* 数据下载按钮基础样式 */
  .btn-data-download {
    color: var(--global-theme-color);
    border: 1.5px solid var(--global-theme-color);
    padding: 4px 12px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none !important; /* 去除下划线 */
    display: inline-block;
    transition: all 0.3s ease-in-out; /* 平滑过渡动画 */
    background-color: transparent;
  }

  /* 鼠标悬停时的样式 */
  .btn-data-download:hover {
    background-color: var(--global-hover-color);
    border-color: var(--global-hover-color);
    color: var(--global-hover-text-color) !important;
    transform: translateY(-1px); /* 悬停时微微上浮的交互感 */
  }

  /* 确保表格自身透明，不覆盖背景 */
  .transparent-table {
    background-color: transparent !important;
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
  }
</style>

<div class="projects">
  <p>本页面集中提供 DAWN 课题组及相关课程的示例数据集。点击右侧按钮可直接获取托管于 GitHub 的原始数据文件。</p>

  <div class="container mt-4">
    <div class="table-responsive">
      <table class="table table-sm transparent-table">
        <thead>
          <tr style="border-bottom: 2px solid var(--global-divider-color);">
            <th scope="col" style="border: none;">数据名称 / Dataset</th>
            <th scope="col" class="d-none d-md-table-cell" style="border: none;">类型</th>
            <th scope="col" class="text-right" style="text-align: right; border: none;">获取链接</th>
          </tr>
        </thead>
        <tbody>
          {% for data in page.datasets %}
          <tr style="border-bottom: 1px solid var(--global-divider-color);">
            <td class="align-middle" style="background-color: transparent; border: none;">
              <i class="{{ data.icon }}" style="color: var(--global-theme-color); width: 20px; text-align: center;"></i> 
              <strong style="margin-left: 5px;">{{ data.name }}</strong> <br>
              <span style="color: var(--global-text-color-light); font-size: 0.85em; margin-left: 28px; display: inline-block;">{{ data.desc }}</span>
            </td>
            <td class="d-none d-md-table-cell align-middle" style="background-color: transparent; border: none;">
              <code>{{ data.type }}</code>
            </td>
            <td class="align-middle" style="text-align: right; background-color: transparent; border: none;">
              <a href="{{ data.url }}" target="_blank" class="btn-data-download">Download</a>
            </td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>
</div>