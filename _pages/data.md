---
layout: page
permalink: /data/
title: "<span class='nav-cn'>数据</span><span class='nav-en'>Data</span>"
description: 课程练习与研究示例数据集 (Datasets for Practice & Research)
nav: true
nav_order: 5

# --- 数据集信息 ---
datasets:
  - name: "纽约市Taxi Zone边界"
    desc: "纽约市Taxi Zone边界数据"
    icon: "fas fa-map" # 兼容性极好的面/多边形图标
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/nyc_boundary.geojson"
    
  - name: "纽约市网约车采样数据"
    desc: "2026年1月纽约市网约车10%采样数据"
    icon: "fas fa-table" # 兼容性极好的面/多边形图标
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/nyc_taxi_202601_sample.csv"    
    
  - name: "上海市边界"
    desc: "上海市行政边界底图数据"
    icon: "fas fa-map" # 兼容性极好的面/多边形图标
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/shanghai_boundary.geojson"
    
  - name: "微博采样数据"
    desc: "Weibo 采样数据 (4% 比例)"
    icon: "fas fa-table" # 兼容性极好的表格/CSV图标
    type: ".csv"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/weibo_sample_4pct.csv"
    
  - name: "便利超市 POI"
    desc: "上海市便利店与超市空间数据"
    icon: "fas fa-map-marker-alt" # 兼容性极好的点位图标
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/便利超市.geojson"
    
  - name: "公交站 POI"
    desc: "公共交通站点空间分布数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公交站.geojson"
    
  - name: "公园 POI"
    desc: "城市绿地与公园空间数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/公园.geojson"
    
  - name: "咖啡厅 POI"
    desc: "各类咖啡馆、饮品店数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/咖啡厅.geojson"
    
  - name: "地铁站 POI"
    desc: "轨道交通站点及出口数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/地铁站.geojson"
    
  - name: "餐厅 POI"
    desc: "餐饮服务业空间分布数据"
    icon: "fas fa-map-marker-alt"
    type: ".geojson"
    url: "https://github.com/DAWN-ECNU/Example_data/raw/main/餐厅.geojson"
---

<style>
  /* 强制消除表格底色干扰 */
  .custom-data-table {
    background-color: transparent !important;
    --bs-table-bg: transparent !important;
    --bs-table-accent-bg: transparent !important;
    --bs-table-striped-bg: transparent !important;
  }
  .custom-data-table th, 
  .custom-data-table td {
    background-color: transparent !important;
    border-bottom: 1px solid var(--global-divider-color) !important;
  }
  .custom-data-table thead th {
    border-bottom: 2px solid var(--global-divider-color) !important;
  }

  /* 彻底修复下载按钮在各模式下的对比度问题 */
  a.btn-data-download {
    /* 这里改成了 global-text-color: 白天是深灰色，黑夜是亮白色，保证绝对看得清 */
    color: var(--global-text-color) !important; 
    border: 1.5px solid var(--global-theme-color) !important;
    padding: 4px 12px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none !important;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    background-color: transparent !important;
  }

  /* 悬停动画：调用悬停色，并根据配置改变文字颜色以适应背景 */
  a.btn-data-download:hover {
    background-color: var(--global-hover-color) !important;
    border-color: var(--global-hover-color) !important;
    color: var(--global-hover-text-color) !important;
    transform: translateY(-1px);
  }
</style>

<div class="projects">
  <p>本页面集中提供 DAWN 课题组及相关课程的示例数据集。点击右侧按钮可直接获取托管于 GitHub 的原始数据文件。</p>

  <div class="container mt-4">
    <div class="table-responsive">
      <table class="table table-sm custom-data-table" style="border-collapse: collapse;">
        <thead>
          <tr>
            <th scope="col" style="border-top: none;">数据名称 / Dataset</th>
            <th scope="col" class="d-none d-md-table-cell" style="border-top: none;">类型</th>
            <th scope="col" class="text-right" style="text-align: right; border-top: none;">获取链接</th>
          </tr>
        </thead>
        <tbody>
          {% for data in page.datasets %}
          <tr>
            <td class="align-middle">
              <i class="{{ data.icon }}" style="color: var(--global-theme-color); width: 20px; text-align: center;"></i> 
              <strong style="margin-left: 5px;">{{ data.name }}</strong> <br>
              <span style="color: var(--global-text-color-light); font-size: 0.85em; margin-left: 28px; display: inline-block;">{{ data.desc }}</span>
            </td>
            <td class="d-none d-md-table-cell align-middle">
              <code>{{ data.type }}</code>
            </td>
            <td class="align-middle" style="text-align: right;">
              <a href="{{ data.url }}" target="_blank" class="btn-data-download">Download</a>
            </td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>
</div>