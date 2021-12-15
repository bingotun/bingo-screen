export default function registerUser (lf) {
  lf.register('user', ({ PolygonNode, PolygonNodeModel, h }) => {
    class Node extends PolygonNode {
      getIconShape () {
        const attributes = this.getAttributes()
        const {
          stroke
        } = attributes
        return h(
          'svg',
          {
            x: 20,
            y: 18,
            width: 30,
            height: 30,
            viewBox: '0 0 1126 1024'
          },
          h(
            'path',
            {
              fill: stroke,
              d: 'M792.576 379.392a25.6 25.6 0 0 0 25.2928 25.8048h283.2384A25.6 25.6 0 0 0 1126.4 379.392a25.6 25.6 0 0 0-25.2928-25.8048h-283.2384a25.6 25.6 0 0 0-25.344 25.8048z m303.9232 80.7424H761.856c-16.5376 0-29.9008 11.6224-29.9008 25.7536 0 14.1824 13.312 25.7536 29.9008 25.7536h334.6432c16.4864 0 29.9008-11.5712 29.9008-25.7536 0-14.1312-13.4144-25.7536-29.9008-25.7536z m4.608 106.496h-283.2384a25.6 25.6 0 0 0-25.344 25.7536 25.6 25.6 0 0 0 25.344 25.7536h283.2384A25.6 25.6 0 0 0 1126.4 592.384a25.6 25.6 0 0 0-25.2928-25.8048zM543.0272 1024H341.6576C150.8352 1024 0 1024 0 923.648v-20.1216c0-188.16 153.2928-341.1968 341.7088-341.1968h201.2672c188.416 0 341.76 153.0368 341.76 341.1968v20.0704C884.6848 1024 726.3232 1024 542.976 1024z m-203.1616-405.1456c-158.464 0-287.4368 128.4096-287.4368 286.208v20.48c0 40.9088 166.0928 40.9088 287.4368 40.9088h204.9536c100.4544 0 287.4368 0 287.4368-40.96v-20.3776c0-157.8496-128.9728-286.208-287.4368-286.208H339.8656z m92.416-76.7488a271.4112 271.4112 0 0 1-271.2064-271.0528A271.36 271.36 0 0 1 432.2816 0a271.36 271.36 0 0 1 271.2064 271.0528 271.4624 271.4624 0 0 1-271.2064 271.0528z m-215.3472-271.872c0 118.1696 96.6144 214.3232 215.3472 214.3232 118.784 0 215.3984-96.1536 215.3984-214.3232 0-118.2208-96.6144-214.3232-215.3984-214.3232S216.9344 152.0128 216.9344 270.2336z'
            }
          )
        )
      }
      /**
       * <svg t="1636087855860" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10309" width="200" height="200">
       * <path d="M587.52 307.32c-4.52 0-9.04-1.72-12.5-5.18-6.9-6.9-6.9-18.1 0-24.98l66.48-66.48a17.66 17.66 0 0 1 24.98 0c6.9 6.9 6.9 18.1 0 24.98L600 302.14a17.532 17.532 0 0 1-12.48 5.18zM417.98 790.36c-17.42 0-34.82-6.62-48.06-19.86l-96-96c-12.82-12.82-19.86-29.94-19.84-48.2 0.04-18.22 7.14-35.34 19.98-48.18l248.2-248.2a17.66 17.66 0 0 1 24.98 0c6.9 6.9 6.9 18.1 0 24.98l-248.2 248.2c-6.18 6.18-9.6 14.46-9.62 23.28-0.02 8.78 3.34 17 9.48 23.12l96 96c12.76 12.74 33.56 12.68 46.4-0.14l367.44-367.44a17.66 17.66 0 0 1 24.98 0c6.9 6.9 6.9 18.1 0 24.98L466.3 770.34c-13.32 13.34-30.84 20.02-48.32 20.02z" p-id="10310"></path>
       * <path d="M250.26 852.94c-4.52 0-9.04-1.72-12.5-5.18l-41.1-41.1c-6.9-6.9-6.9-18.1 0-24.98l29.08-29.08c-6.56-20.64-9.12-50.42 10.48-70.02l35.38-35.38c6.62-6.62 18.36-6.62 24.98 0l100.64 100.64c6.9 6.9 6.9 18.1 0 24.98l-35.38 35.38c-19.6 19.62-49.4 17.04-70.02 10.5l-29.08 29.06a17.616 17.616 0 0 1-12.48 5.18z m-16.12-58.78l16.12 16.12 24.7-24.7a17.714 17.714 0 0 1 20.02-3.5c7.6 3.5 31.7 11.3 41.9 1.12l22.88-22.88-75.66-75.66-22.88 22.88c-10.18 10.18-2.38 34.3 1.16 41.94 3.1 6.72 1.72 14.74-3.52 19.96l-24.72 24.72zM858.4 436.38c-4.52 0-9.04-1.72-12.5-5.18L613.2 198.5c-6.9-6.9-6.9-18.1 0-24.98a17.66 17.66 0 0 1 24.98 0l232.7 232.7c6.9 6.9 6.9 18.1 0 24.98a17.532 17.532 0 0 1-12.48 5.18zM499.18 730.16c-4.52 0-9.04-1.72-12.5-5.18l-167.24-167.24c-6.9-6.9-6.9-18.1 0-24.98a17.66 17.66 0 0 1 24.98 0L511.66 700c6.9 6.9 6.9 18.1 0 24.98a17.532 17.532 0 0 1-12.48 5.18zM927.72 335.86c-3.08 0-6.18-0.8-9.04-2.5-2.38-1.42-59.06-35.48-115.6-92.04-56.56-56.54-90.62-113.22-92.04-115.62-5-8.38-2.24-19.22 6.12-24.22 8.38-5.02 19.22-2.26 24.22 6.12 0.32 0.54 33.38 55.44 86.68 108.74s108.18 86.34 108.72 86.68c8.38 5 11.12 15.86 6.12 24.22-3.3 5.56-9.16 8.62-15.18 8.62zM731.56 497.76c-4.52 0-9.04-1.72-12.5-5.18l-45.6-45.6c-6.9-6.9-6.9-18.1 0-24.98a17.66 17.66 0 0 1 24.98 0l45.6 45.6c6.9 6.9 6.9 18.1 0 24.98a17.532 17.532 0 0 1-12.48 5.18zM662.42 566.9c-4.52 0-9.04-1.72-12.5-5.18l-45.6-45.6c-6.9-6.9-6.9-18.1 0-24.98a17.66 17.66 0 0 1 24.98 0l45.6 45.6c6.9 6.9 6.9 18.1 0 24.98a17.532 17.532 0 0 1-12.48 5.18zM593.28 636.04c-4.52 0-9.04-1.72-12.5-5.18l-45.6-45.6c-6.9-6.9-6.9-18.1 0-24.98a17.66 17.66 0 0 1 24.98 0l45.6 45.6c6.9 6.9 6.9 18.1 0 24.98a17.532 17.532 0 0 1-12.48 5.18z" p-id="10311"></path>
       * <path d="M695.56 273.54c-4.52 0-9.04-1.72-12.5-5.18-6.9-6.9-6.9-18.1 0-24.98l73.56-73.56a17.66 17.66 0 0 1 24.98 0c6.9 6.9 6.9 18.1 0 24.98l-73.56 73.56a17.532 17.532 0 0 1-12.48 5.18zM788.54 366.52c-4.52 0-9.04-1.72-12.5-5.18-6.9-6.9-6.9-18.1 0-24.98l73.56-73.56a17.66 17.66 0 0 1 24.98 0c6.9 6.9 6.9 18.1 0 24.98l-73.56 73.56a17.532 17.532 0 0 1-12.48 5.18zM96.88 965.22c-4.52 0-9.04-1.72-12.5-5.18a17.66 17.66 0 0 1 0-24.98l132.82-132.84a17.66 17.66 0 0 1 24.98 0 17.66 17.66 0 0 1 0 24.98l-132.82 132.84a17.616 17.616 0 0 1-12.48 5.18z" p-id="10312"></path>
       * </svg>
       */
      getShape () {
        const attributes = this.getAttributes()
        const {
          width,
          height,
          x,
          y,
          fill,
          fillOpacity,
          strokeWidth,
          stroke,
          strokeOpacity,
          points
        } = attributes
        const transform = `matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})`
        const pointsPath = points.map(point => point.join(',')).join(' ')
        return h(
          'g',
          {
            transform
          },
          [
            h(
              'polygon',
              {
                points: pointsPath,
                fill,
                stroke,
                strokeWidth,
                strokeOpacity,
                fillOpacity
              }
            ),
            this.getIconShape()
          ]
        )
      }
    }
    class Model extends PolygonNodeModel {
      constructor (data, graphModel) {
        data.text = {
          value: (data.text && data.text.value) || '',
          x: data.x,
          y: data.y + 50
        }
        super(data, graphModel)
        const lenght = 35
        this.points = [
          [lenght, 0],
          [lenght * 2, lenght],
          [lenght, lenght * 2],
          [0, lenght]
        ]
        // 右键菜单自由配置，也可以通过边的properties或者其他属性条件更换不同菜单
        this.menu = [
          {
            className: 'lf-menu-delete',
            text: 'delete',
            callback (node) {
              // const comfirm = window.confirm('你确定要删除吗？')
              lf.deleteNode(node.id)
            }
          },
          {
            text: 'edit',
            className: 'lf-menu-item',
            callback (node) {
              lf.editNodeText(node.id)
            }
          },
          {
            text: 'copy',
            className: 'lf-menu-item',
            callback (node) {
              lf.cloneNode(node.id)
            }
          }
        ]
      }
    }
    return {
      view: Node,
      model: Model
    }
  })
}
