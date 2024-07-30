const dev = {}
!(function() {
  var devspeed = 1
  var devmode = (location.host == "localhost:8158")
  Object.defineProperty(dev, "devSpeed", {
    get: function() {
      return devspeed
    },
    set: function() {
      alert("检测到作弊行为")
      clearInterval(loopVal)
    },
    enumerable: false,
    configurable: false,
  })
  Object.defineProperty(dev, "devmode", {
    get: function() {
      return devmode
    },
    set: function(x) {
      alert("检测到作弊行为")
      clearInterval(loopVal)
    },
    enumerable: false,
    configurable: false,
  })
  var changeDevSpeed = function (x) {
    devspeed = x
  }
  Vue.component("test-page", {
    template: `
      <div v-if="dev.devmode && player.currentPage == null">
        <button class="btn" @click="changeDevSpeed(0)">暂停</button>
        <button class="btn" @click="changeDevSpeed(1)">重置游戏速度</button>
        <button class="btn" @click="changeDevSpeed(2)">游戏速度×2</button>
        <button class="btn" @click="changeDevSpeed(5)">游戏速度×5</button>
        <button class="btn" @click="changeDevSpeed(10)">游戏速度×10</button>
        <button class="btn" @click="changeDevSpeed(20)">游戏速度×20</button>
        <button class="btn" @click="changeDevSpeed(50)">游戏速度×50</button>
        <button class="btn" @click="changeDevSpeed(100)">游戏速度×100</button>
        <div class="main-line"></div>
        <span>计划内容</span><br>
        
        <span>废弃内容</span><br>
        <div id="dbtimes">维度提升(114514)</div>
        <button class="btn">重置之前的所有东西，但每次购买维度的乘数+0.2!<br>价格：114514 维度8</button><br><br>
        <button class="square">进行一次点数<sup>2</sup>重置，并获得 114514 点数<sup>2</sup><br>要求：1.000e460</button><br><br><br>
        <button class="square">^1.5</button><br>
        <table align="center">
        <td><button id="sq_upg1" class="upg" >
        维度提升价格-10，基于重置数量增益所有维度的初始倍数<br>价格：1 点数<sup>2</sup>
        </button></td>
        <td><button id="sq_upg2" class="upg" >
        基于最大的点数<sup>2</sup>数量延迟一重软上限<br>价格：1 点数<sup>2</sup>
        </button></td>
        <td><button id="sq_upg3" class="upg" >
          每次重置都以1维度提升开始<br>
          价格：10 点数<sup>2</sup>
        </button></td>
        <td><button id="sq_upg4" class="upg" >
          维度提升不再重置，重置时开始于2维度提升<br>
          价格：1000 点数<sup>2</sup>
        </button></td>)
        
        <tr>
        
        <td><button id="sq_upg5" class="upg" >
          自动维度提升<br>
          价格：200000 点数<sup>2</sup>
        </button></td>
        <td><button id="sq_upg6" class="upg" >
          维度提升效果+0.02<br>
          价格：1000000<br>点数<sup>2</sup>
        </button></td>
        <td><button id="sq_upg7" class="upg" >
          移除一重软上限，每秒获取100%点数<sup>2</sup><br>
          价格：1.00e2316 点数<sup>2</sup>
        </button></td>
        <td><button id="sq_upg8" class="upg" >
          解锁挑战，你每秒获得1点数<sup>2</sup>次数<br>
          价格：1.00e15405 点数<sup>2</sup>
        </button></td>
        
        <tr>
          
        <td><button id="sq_upg9" class="upg" >
          基于最大的点数<sup>2</sup>延迟二重软上限<br>
          价格：1.00e386975 点数<sup>2</sup>
        </button></td>
        <td><button id="sq_upg10" class="upg">解锁点数<sup>1.5</sup><br>
          价格：1.00e417189 点数<sup>2</sup>
        </button></td>
        </table>
        <div id="page3">
      <div align="center">
        达成目标后将自动退出并完成挑战!
        <button class="btn">退出挑战</button><br><br>
      </div>
      <table align="center">
      <td><button id="chal1">禁用维度5~8，维度提升数量始终为3<br><div id="chalcomp1">未完成</div>目标：1e155 点数<br>奖励：2~8维的价格增长和初始价格都降低至10，最大点数<sup>2</sup>增益维度</button>
      <td><button id="chal2">所有维度乘数^0.01<br><div id="chalcomp2">未完成</div>目标：1e75985 点数<br>奖励：第一个^1.5升级的效果变为10次方</button>
      </table>
    </div>
    <div align="center">
        <h3 id="p1_5-eff-display" align="center">你有 114514 点数<sup>1.5</sup>，二重软上限被延缓到^1919810</h3>
      <table align="center">
        <td><button id="p1.5_upg1" class="P1_5_upg">
        点数<sup>1.5</sup>增益它自己<br>价格：300 点数<sup>1.5</sup>
        </button></td>
        <td><button id="p1.5_upg2" class="P1_5_upg">
        点数<sup>2</sup>增益点数<sup>1.5</sup><br>价格：2500 点数<sup>1.5</sup>
        </button></td>
        <td><button id="p1.5_upg3" class="P1_5_upg">
        点数<sup>1.5</sup>以更小的倍率延迟三重软上限<br>价格：15000 点数<sup>1.5</sup>
        </button></td>
        <td><button id="p1.5_upg4" class="P1_5_upg">
        解锁一个挑战，平方重置后开始于 10 维度提升<br>价格：20000 点数<sup>1.5</sup>
        </button></td>
        
        <tr>
        
        <td><button id="p1.5_upg5" class="P1_5_upg">
        解锁购买项<br>价格：5e20 点数<sup>1.5</sup>
        </button></td>
        </table>
      </div>
      <div>
          <h4>v1.2.3</h4>
            - 添加以文件导入<br>
            - 添加更新日志<br>
        </div>
        <div>
          <h4>v1.2.2.1</h4>
            - 修复超级折算的bug
        </div>
        <div>
          <h4>v1.2.2</h4>
            - 添加选项<br>
            - 添加存档选项
        </div>
        <div>
          <h4>v1.2.1</h4>
            - 添加4个升级<br>
            - 添加1个挑战
        </div>
        <div>
          <h3>v1.2 点数<sup>1.5</sup></h3>
            - 添加点数<sup>1.5</sup>
        </div>
        <div>
          <h4>v1.1.1</h4>
            - 修复0.1版本玩家的软上限bug
        </div>
        <div>
          <h3>v1.1 挑战纪元</h3>
            - 修改平方升级对增益的计算<br>
            - 再次修改软上限的显示<br>
            - 添加4个新升级<br>
            - 添加1个挑战<br>
            - 添加究极折算
        </div>
        <div>
          <h2>v1.0 已已已已已已已平方</h2>
            - 添加点数<sup>2</sup><br>
            - 添加6个升级<br>
            - 添加维度提升的超级折算<br>
            - 添加自动维度提升<br>
            - 修改软上限的显示<br>
        </div>
        <div>
          <h3>v0.2 维维度度提提升升</h3>
            - 添加维度提升<br>
            - 延后一重软上限起点<br>
            - 添加自动购买维度
        </div>
        <div>
          <h3>v0.1 维度</h3>
            - 添加维度1~8<br>
            - 添加8个软上限，4个溢出，7个淤积，6个扭曲
        </div>
        <span id="softcap1" style="color: rgb(255, 0, 0)">
        超过 1.80e308 点数后，点数获取速度将被软上限限制!</span><br>
        <span id="softcap2" style="color: rgb(121, 0, 0)">
        超过 e1,000,000 点数后，点数获取速度将被二重软上限限制!</span><br>
        <span id="softcap3" style="color: rgb(122, 0, 86)">
        超过 e100,000,000 点数后，点数获取速度将被三重软上限限制!</span><br>
        <div id="impossible_softcap">
        <span style="color: rgb(255, 94, 0)">
        超过 e1.00e13 点数后，点数获取速度将被四重软上限限制!</span><br>
        <span style="color: rgb(255, 238, 0)">
        超过 e1.00e21 点数后，点数获取速度将被五重软上限限制!</span><br>
        <span style="color: rgb(166, 255, 0)">
        超过 e1.00e31 点数后，点数获取速度将被六重软上限限制!</span><br>
       <span style="color: rgb(0, 255, 149)">
        超过 e1.00e48 点数后，点数获取速度将被七重软上限限制!</span><br>
        <span style="color: rgb(0, 255, 255)">
        超过 e1.00e58 点数后，点数获取速度将被八重软上限限制!</span><br>
        <span style="color: rgb(255, 255, 255)">
        超过 e1.00e69 点数后，点数获取速度将溢出!</span><br>
        <span style="color: rgb(255, 197, 215)">
        超过 e1.00e279 点数后，点数获取速度将二重溢出!</span><br>
        <span style="color: #99F739">
        超过 ee1,000,000 点数后，点数获取速度将三重溢出!</span><br>
        <span style="color: #FF4444">
        超过 ee1.00e10 点数后，点数获取速度将四重溢出!</span><br>
        <span style="color: rgb(194, 177, 255)">
        超过 ee1.00e100 点数后，点数获取速度将淤积!</span><br>
        <span class="corrupted">
        超过 10^^5 点数后，点数获取速度将二重淤积!</span><br>
        <span class="charged_text">
        超过 10^^10 点数后，点数获取速度将三重淤积!</span><br>
        <span class="saved_text">
        超过 10^^1000 点数后，点数获取速度将四重淤积!</span><br>
        <span class="quark_color">
        超过 10^^1.00e10 点数后，点数获取速度将五重淤积!</span><br>
        <span class="f_quark_color">
        超过 10^^1.00e25 点数后，点数获取速度将六重淤积!</span><br>
        <span class="ff_quark_color">
        趆迈 10^^1.00e100 為敱吏，為敱莸变造座將七重淥称!</span><br>
        <span>
        趆迈 10^^10^^10 為敱吏，為敱莸变造座將扭曲!</span><br>
        <span style="color:#aaa">
        !曲扭重二将度速取获数点，后数点 10^^^10000 过超</span><br>
        <span style="color:#777">
        !曲扭重三将度速取获数点，后数点 10^^^10^10 过超</span><br>
        <span style="color:#444">
        !曲扭重四将度速取获数点，后数点 10^^^10^50 过超</span><br>
        <span style="color:#222">
        !曲扭重五将度速取获数点，后数点 10^^^10^200 过超</span><br>
        <span style="color:#111;text-shadow: 1px 1px 2px #222, -1px -1px 2px #444, 0 0 24px #666">
        !曲扭重六将度速取获数点，后数点 10^^^10^1,000,000 过超</span><br>
        <span>
        点数在达到K1e40后将锁定为K1e40!</span><br>
      </div>
    `,
    methods: {
      changeDevSpeed: changeDevSpeed,
    },
  })
})()