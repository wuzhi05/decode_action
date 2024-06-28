//Fri Jun 28 2024 10:08:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getEnvsByName,
  DisableCk,
  EnableCk,
  updateEnv,
  updateEnv11,
  getEnvByUserId
} = require("./ql");
const {
  wait,
  checkCk,
  validateCarmeWithType,
  invalidCookieNotify,
  getUserInfo,
  runOne,
  getCookieMap
} = require("./common.js");
const _0x11f78e = require("moment");
function _0x543ec4(_0x3fdeea, _0x4dabab) {
  const _0x461b46 = {};
  _0x461b46.pUHiO = function (_0x8f0817, _0x419458) {
    return _0x8f0817 + _0x419458;
  };
  _0x461b46.xJlGV = function (_0x197fee, _0x476c45) {
    return _0x197fee * _0x476c45;
  };
  _0x461b46.eObaS = function (_0x229b87, _0x1bf229) {
    return _0x229b87 + _0x1bf229;
  };
  _0x461b46.bmvYu = function (_0x574225, _0xbb9a5e) {
    return _0x574225 - _0xbb9a5e;
  };
  const _0x15e4c1 = _0x461b46;
  return Math.floor(_0x15e4c1.pUHiO(_0x15e4c1.xJlGV(Math.random(), _0x15e4c1.eObaS(_0x15e4c1.bmvYu(_0x4dabab, _0x3fdeea), 1)), _0x3fdeea));
}
function _0x389941(_0x1daaab) {
  const _0xfaa5ff = {};
  _0xfaa5ff.RvfYo = function (_0x19e184, _0x6a50d9) {
    return _0x19e184 + _0x6a50d9;
  };
  _0xfaa5ff.DMVFx = "账号失效！请重新登录！！！😭";
  _0xfaa5ff.wLlVB = function (_0x2ffb69, _0x30f83e) {
    return _0x2ffb69 !== _0x30f83e;
  };
  _0xfaa5ff.tWibQ = "cmpkp";
  _0xfaa5ff.VdhTf = function (_0x3cae3f, _0xb4b866) {
    return _0x3cae3f(_0xb4b866);
  };
  const _0x3841dd = _0xfaa5ff;
  let _0x59299c = "";
  for (let [_0x7cf76, _0x5050e8] of _0x1daaab) {
    if (_0x3841dd.wLlVB(_0x3841dd.tWibQ, _0x3841dd.tWibQ)) {
      console.log("第", _0x3841dd.RvfYo(i, 1), _0x3841dd.DMVFx);
    } else {
      _0x59299c += _0x3841dd.VdhTf(encodeURIComponent, _0x7cf76) + "=" + _0x3841dd.VdhTf(encodeURIComponent, _0x5050e8) + ";";
    }
  }
  return _0x59299c;
}
async function _0x179175(_0x2afd75, _0x2c035c, _0x3898fc) {
  const _0x227558 = {};
  _0x227558.bzFxE = function (_0x367c19, _0x51dcd7) {
    return _0x367c19 + _0x51dcd7;
  };
  _0x227558.iWRlw = "debu";
  _0x227558.mnLQl = "gger";
  _0x227558.mbRbb = "action";
  _0x227558.newEo = function (_0x51c4ff, _0x1154a4) {
    return _0x51c4ff + _0x1154a4;
  };
  _0x227558.eOdqo = "stateObject";
  _0x227558.qbTdU = function (_0x4b93d1, _0x2f2643) {
    return _0x4b93d1 + _0x2f2643;
  };
  _0x227558.BmGGd = function (_0x518bce, _0x1b5606) {
    return _0x518bce * _0x1b5606;
  };
  _0x227558.ONepm = function (_0x1f25e5, _0x5883fa) {
    return _0x1f25e5 + _0x5883fa;
  };
  _0x227558.Iztwo = function (_0x1e3ed2, _0x30fbdd) {
    return _0x1e3ed2 - _0x30fbdd;
  };
  _0x227558.phgHH = "账号失效！请重新登录！！！😭";
  _0x227558.KIilh = "function *\\( *\\)";
  _0x227558.WoEQW = "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)";
  _0x227558.VGCrc = function (_0x59aecb, _0x570768) {
    return _0x59aecb(_0x570768);
  };
  _0x227558.KmKWe = "init";
  _0x227558.drXdr = "chain";
  _0x227558.qHKIH = function (_0x2ba2cf, _0x3969f9) {
    return _0x2ba2cf + _0x3969f9;
  };
  _0x227558.FawBU = "input";
  _0x227558.VYvPS = function (_0x45dccc, _0x3c728b) {
    return _0x45dccc(_0x3c728b);
  };
  _0x227558.mBDlL = function (_0x5b5cf8) {
    return _0x5b5cf8();
  };
  _0x227558.SjdNw = function (_0x2555b3, _0x115ab4, _0x14e0ea) {
    return _0x2555b3(_0x115ab4, _0x14e0ea);
  };
  _0x227558.KIqLA = "while (true) {}";
  _0x227558.NDmCm = "counter";
  _0x227558.hwKLi = "return /\" + this + \"/";
  _0x227558.oATed = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x227558.dAhlS = function (_0x36837e, _0x446156) {
    return _0x36837e === _0x446156;
  };
  _0x227558.qObCZ = "rrrZq";
  _0x227558.PjNLc = "nbZkn";
  _0x227558.nweDu = function (_0x41db80, _0x4461df) {
    return _0x41db80 !== _0x4461df;
  };
  _0x227558.okVFn = "jNSzA";
  _0x227558.RNEyX = "RYQNx";
  _0x227558.Dmsso = function (_0x4c42a0, _0x4f1c7c) {
    return _0x4c42a0 * _0x4f1c7c;
  };
  _0x227558.vERIn = "YYYY-MM-DD HH:mm:ss";
  _0x227558.DjQXc = function (_0x45742a, _0x35686c) {
    return _0x45742a < _0x35686c;
  };
  _0x227558.IyynT = "wRrHS";
  _0x227558.kispl = "SID";
  _0x227558.FatjD = "WluPj";
  _0x227558.lqglU = function (_0x220cfd, _0x242fb0, _0x1cd4cd) {
    return _0x220cfd(_0x242fb0, _0x1cd4cd);
  };
  _0x227558.eRegG = function (_0x7efe93, _0x1197c0) {
    return _0x7efe93 !== _0x1197c0;
  };
  _0x227558.QZGEz = "rMLtJ";
  _0x227558.WeXhp = "AEQdb";
  _0x227558.LoWkz = "cookie2";
  _0x227558.cMUcp = "nHYyG";
  _0x227558.gjYnE = "AfCOl";
  _0x227558.cNAwd = function (_0x28814e, _0x46d4af, _0x59f100, _0x3e5050) {
    return _0x28814e(_0x46d4af, _0x59f100, _0x3e5050);
  };
  _0x227558.agBWS = "QseeH";
  _0x227558.oDDYs = "USERID";
  _0x227558.VJrVA = function (_0x5facc7, _0x17b8ae) {
    return _0x5facc7 === _0x17b8ae;
  };
  _0x227558.BPDnc = "yuhMi";
  _0x227558.wdIbc = "检测到 elmqqck，将进行同步刷新";
  _0x227558.brtoN = "TcDPE";
  _0x227558.NKhrC = "Owweb";
  _0x227558.WMCqS = function (_0x2eb909, _0x5c0029, _0x5b89ae, _0x1ff3d1, _0x217a87) {
    return _0x2eb909(_0x5c0029, _0x5b89ae, _0x1ff3d1, _0x217a87);
  };
  _0x227558.NjRim = "elmqqck";
  _0x227558.geYWj = function (_0x613784, _0x5b33c1) {
    return _0x613784 !== _0x5b33c1;
  };
  _0x227558.sUkWa = "YJXhz";
  _0x227558.DxmLT = "FbWqp";
  _0x227558.LUflM = function (_0x80fefc, _0x5df5fa, _0x33210b, _0x42addf, _0x26a2b0) {
    return _0x80fefc(_0x5df5fa, _0x33210b, _0x42addf, _0x26a2b0);
  };
  _0x227558.RLuAE = "刷新成功，ck 有效期为：";
  _0x227558.WImYi = function (_0x18e8b8, _0x3d53cb) {
    return _0x18e8b8 !== _0x3d53cb;
  };
  _0x227558.FRmAh = "JBtrg";
  _0x227558.TIoqP = "NueOM";
  _0x227558.DfqDy = function (_0x162133, _0x2a73c7) {
    return _0x162133 === _0x2a73c7;
  };
  _0x227558.bgSDt = "jQFRV";
  _0x227558.nEEjX = "aRMUZ";
  const _0x425161 = _0x227558;
  let _0x1723ee = await _0x425161.SjdNw(runOne, _0x2c035c, _0x3898fc);
  if (_0x1723ee && _0x1723ee.data) {
    if (_0x425161.dAhlS(_0x425161.qObCZ, _0x425161.PjNLc)) {
      console.log(data.message);
    } else {
      let _0x56dfb3 = _0x1723ee.data;
      if (_0x425161.dAhlS(_0x56dfb3.code, 3000)) {
        if (_0x425161.nweDu(_0x425161.okVFn, _0x425161.RNEyX)) {
          let _0x152e9a = JSON.parse(_0x56dfb3.returnValue.data);
          const _0x120021 = _0x152e9a.expires;
          const _0x3e21d8 = _0x425161.VYvPS(_0x11f78e, _0x425161.Dmsso(_0x120021, 1000)).format(_0x425161.vERIn);
          let _0xcf2e0a = _0x425161.VYvPS(getCookieMap, _0x2c035c);
          let _0x1e14a1 = JSON.parse(_0x56dfb3.returnValue.extMap.eleExt);
          for (let _0x325327 = 0; _0x425161.DjQXc(_0x325327, _0x1e14a1.length); _0x325327++) {
            if (_0x425161.dAhlS(_0x425161.IyynT, _0x425161.IyynT)) {
              let _0x296965 = _0x1e14a1[_0x325327];
              if (_0x425161.dAhlS(_0x296965.name, _0x425161.kispl)) {
                if (_0x425161.nweDu(_0x425161.FatjD, _0x425161.FatjD)) {
                  (function () {
                    return true;
                  }).constructor(_0x425161.bzFxE(_0x425161.iWRlw, _0x425161.mnLQl)).call(_0x425161.mbRbb);
                } else {
                  _0xcf2e0a[_0x425161.kispl] = _0x296965.value;
                  break;
                }
              }
            } else {
              const _0x55974e = fn.apply(context, arguments);
              fn = null;
              return _0x55974e;
            }
          }
          let _0x5a92f2 = await _0x425161.lqglU(runOne, _0x2c035c, _0xcf2e0a.get(_0x425161.kispl));
          if (!_0x5a92f2) {
            if (_0x425161.eRegG(_0x425161.QZGEz, _0x425161.WeXhp)) {
              return;
            } else {
              tempid = envs[i].id;
            }
          }
          _0xcf2e0a[_0x425161.LoWkz] = _0x56dfb3.returnValue.sid;
          let _0xf79b29 = _0x425161.VYvPS(_0x389941, _0xcf2e0a);
          if (_0x2afd75.id) {
            if (_0x425161.dAhlS(_0x425161.cMUcp, _0x425161.gjYnE)) {
              return false;
            } else {
              await _0x425161.cNAwd(updateEnv11, _0xf79b29, _0x2afd75.id, _0x2afd75.remarks);
            }
          } else {
            if (_0x425161.eRegG(_0x425161.agBWS, _0x425161.agBWS)) {
              (function () {
                return false;
              }).constructor(_0x425161.newEo(_0x425161.iWRlw, _0x425161.mnLQl)).apply(_0x425161.eOdqo);
            } else {
              await _0x425161.cNAwd(updateEnv, _0xf79b29, _0x2afd75._id, _0x2afd75.remarks);
            }
          }
          let _0x88e06c = _0xcf2e0a.get(_0x425161.oDDYs);
          let _0x2704d2 = await _0x425161.VYvPS(getEnvByUserId, _0x88e06c);
          if (_0x2704d2) {
            if (_0x425161.VJrVA(_0x425161.BPDnc, _0x425161.BPDnc)) {
              console.log(_0x425161.wdIbc);
              if (_0x2704d2.id) {
                if (_0x425161.eRegG(_0x425161.brtoN, _0x425161.NKhrC)) {
                  await _0x425161.WMCqS(updateEnv11, _0xf79b29, _0x2704d2.id, _0x2704d2.remarks, _0x425161.NjRim);
                } else {
                  return Math.floor(_0x425161.qbTdU(_0x425161.BmGGd(Math.random(), _0x425161.ONepm(_0x425161.Iztwo(m, n), 1)), n));
                }
              } else {
                if (_0x425161.geYWj(_0x425161.sUkWa, _0x425161.DxmLT)) {
                  await _0x425161.LUflM(updateEnv, _0xf79b29, _0x2704d2._id, _0x2704d2.remarks, _0x425161.NjRim);
                } else {
                  console.log(error);
                }
              }
            } else {
              console.log("第", _0x425161.ONepm(i, 1), _0x425161.phgHH);
            }
          }
          let _0x4bf6e8 = _0x425161.qHKIH(_0x425161.RLuAE, _0x3e21d8);
          console.log(_0x4bf6e8);
          return _0x4bf6e8;
        } else {
          _0x425161.SjdNw(obWBw, this, function () {
            const _0xdc744c = new RegExp(_0x425161.KIilh);
            const _0x49fbe0 = new RegExp(_0x425161.WoEQW, "i");
            const _0x4d754a = _0x425161.VGCrc(_0x5185ef, _0x425161.KmKWe);
            if (!_0xdc744c.test(_0x425161.ONepm(_0x4d754a, _0x425161.drXdr)) || !_0x49fbe0.test(_0x425161.qHKIH(_0x4d754a, _0x425161.FawBU))) {
              _0x425161.VYvPS(_0x4d754a, "0");
            } else {
              _0x425161.mBDlL(_0x5185ef);
            }
          })();
        }
      } else {
        if (_0x425161.WImYi(_0x425161.FRmAh, _0x425161.FRmAh)) {
          if (fn) {
            const _0x28ead1 = fn.apply(context, arguments);
            fn = null;
            return _0x28ead1;
          }
        } else {
          if (_0x56dfb3.message) {
            if (_0x425161.VJrVA(_0x425161.TIoqP, _0x425161.TIoqP)) {
              console.log(_0x56dfb3.message);
            } else {
              return function (_0x49bfbd) {}.constructor(_0x425161.KIqLA).apply(_0x425161.NDmCm);
            }
          } else {
            if (_0x425161.DfqDy(_0x425161.bgSDt, _0x425161.nEEjX)) {
              const _0x7fb878 = test.constructor(_0x425161.hwKLi)().compile(_0x425161.oATed);
              return !_0x7fb878.test(_0x3d6243);
            } else {
              console.log(_0x1723ee.ret[0]);
            }
          }
          return null;
        }
      }
    }
  }
}
setInterval(function () {
  const _0x1c5cd7 = {};
  _0x1c5cd7.vHFIg = function (_0x5b6138) {
    return _0x5b6138();
  };
  const _0x4fe63a = _0x1c5cd7;
  _0x4fe63a.vHFIg(_0x5185ef);
}, 4000);
(async function _0x1f3fe2() {
  const _0x1cb86c = {};
  _0x1cb86c.hPaIO = function (_0x3c47d2, _0x34a660) {
    return _0x3c47d2(_0x34a660);
  };
  _0x1cb86c.rjdiu = " ❌无效用户信息, 请重新获取ck";
  _0x1cb86c.HUHMd = function (_0x49be25, _0x816ef8) {
    return _0x49be25 === _0x816ef8;
  };
  _0x1cb86c.HzyVU = "Rlnqy";
  _0x1cb86c.HtkWe = "saqEI";
  _0x1cb86c.goZyK = function (_0x15fff3, _0x348a15) {
    return _0x15fff3 !== _0x348a15;
  };
  _0x1cb86c.uoUxa = "aloOF";
  _0x1cb86c.SgYFY = "bNPdp";
  _0x1cb86c.WOdmq = "REokt";
  _0x1cb86c.tYzct = function (_0x842f1b, _0x1d4b61) {
    return _0x842f1b === _0x1d4b61;
  };
  _0x1cb86c.Zchlp = "HgAMf";
  _0x1cb86c.xwkMP = "HdMTL";
  _0x1cb86c.NSuqx = "hccKq";
  _0x1cb86c.xLqWQ = "return /\" + this + \"/";
  _0x1cb86c.Zydgg = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x1cb86c.HhNXy = function (_0x719d4d) {
    return _0x719d4d();
  };
  _0x1cb86c.vigbx = "xjwll";
  _0x1cb86c.MxNro = function (_0x4b9b32, _0x1792a3) {
    return _0x4b9b32(_0x1792a3);
  };
  _0x1cb86c.HMrxd = function (_0x42c473) {
    return _0x42c473();
  };
  _0x1cb86c.fjWCD = function (_0x36bf0a) {
    return _0x36bf0a();
  };
  _0x1cb86c.fYtPL = "rQCoK";
  _0x1cb86c.zBgsV = "JYiUF";
  _0x1cb86c.aAcLz = "POPOC";
  _0x1cb86c.oHMOf = "rZFDl";
  _0x1cb86c.VsCwX = "uAAhI";
  _0x1cb86c.KEbNu = function (_0x5d1a8d, _0x4492f8) {
    return _0x5d1a8d === _0x4492f8;
  };
  _0x1cb86c.znlSM = "HwTFr";
  _0x1cb86c.HfiTv = function (_0xf60f0c, _0x2eda96) {
    return _0xf60f0c + _0x2eda96;
  };
  _0x1cb86c.lDJMm = "账号失效！已🈲用";
  _0x1cb86c.UkfzJ = function (_0x21fce9, _0x3098b3) {
    return _0x21fce9 !== _0x3098b3;
  };
  _0x1cb86c.YZtsE = "ejNqW";
  _0x1cb86c.hfBtj = "zfAwF";
  _0x1cb86c.PCDYp = "function *\\( *\\)";
  _0x1cb86c.DizKp = "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)";
  _0x1cb86c.yvnsd = function (_0x140148, _0x560a01) {
    return _0x140148(_0x560a01);
  };
  _0x1cb86c.xDeMG = "init";
  _0x1cb86c.NAqby = function (_0x2048e0, _0x1169f1) {
    return _0x2048e0 + _0x1169f1;
  };
  _0x1cb86c.kAzIP = "chain";
  _0x1cb86c.ZjYqf = "input";
  _0x1cb86c.kiojb = "qTcUm";
  _0x1cb86c.XyBvN = "PQSWE";
  _0x1cb86c.UAfcV = function (_0x49beac, _0x4429eb) {
    return _0x49beac(_0x4429eb);
  };
  _0x1cb86c.shEeI = "iUVma";
  _0x1cb86c.pPkYH = function (_0x569a66) {
    return _0x569a66();
  };
  _0x1cb86c.EsVqU = function (_0x15475f, _0x53b63a) {
    return _0x15475f(_0x53b63a);
  };
  _0x1cb86c.IxRqk = function (_0x45be97, _0x32f7ca) {
    return _0x45be97 !== _0x32f7ca;
  };
  _0x1cb86c.sEOSK = "bHFdb";
  _0x1cb86c.cbmZE = function (_0x930008, _0x8f3250, _0x245910) {
    return _0x930008(_0x8f3250, _0x245910);
  };
  _0x1cb86c.wiXoT = function (_0x3d8173, _0x22d39d) {
    return _0x3d8173(_0x22d39d);
  };
  _0x1cb86c.WfVOV = function (_0x3f27fd, _0xb1537e) {
    return _0x3f27fd(_0xb1537e);
  };
  _0x1cb86c.kibRq = function (_0x4becd5, _0x55675f) {
    return _0x4becd5 + _0x55675f;
  };
  _0x1cb86c.cgLha = function (_0x2878d0) {
    return _0x2878d0();
  };
  _0x1cb86c.aaosY = function (_0x364922) {
    return _0x364922();
  };
  _0x1cb86c.yVKBg = function (_0xb83856, _0xdfd4ce, _0x5b2458) {
    return _0xb83856(_0xdfd4ce, _0x5b2458);
  };
  _0x1cb86c.heqXv = "elmck";
  _0x1cb86c.RXzhi = function (_0x85988d, _0x112336) {
    return _0x85988d < _0x112336;
  };
  _0x1cb86c.UlJgY = "QpaqA";
  _0x1cb86c.krMZW = "ejuvT";
  _0x1cb86c.KlQsx = "KbuRP";
  _0x1cb86c.pLzpO = "DKRdU";
  _0x1cb86c.bniKb = "FSXdh";
  _0x1cb86c.YzAft = function (_0x4909fb, _0x954de6, _0x44f0c7) {
    return _0x4909fb(_0x954de6, _0x44f0c7);
  };
  _0x1cb86c.voneP = function (_0x2e22ad, _0x306887) {
    return _0x2e22ad === _0x306887;
  };
  _0x1cb86c.XoKba = "pvtZm";
  _0x1cb86c.WOPJN = function (_0xdb71db, _0x144970, _0xff0991) {
    return _0xdb71db(_0x144970, _0xff0991);
  };
  _0x1cb86c.PkNjW = "刷新成功";
  _0x1cb86c.yHzjQ = "JuhOd";
  _0x1cb86c.KnfdB = "IDtFU";
  _0x1cb86c.JdFZT = function (_0x1f5530, _0x472e79) {
    return _0x1f5530(_0x472e79);
  };
  _0x1cb86c.LgRnj = function (_0xc00a85, _0x1532a1) {
    return _0xc00a85 + _0x1532a1;
  };
  _0x1cb86c.GkbzO = "账号正常😁\n";
  _0x1cb86c.SyJmt = function (_0xe76d3b, _0x4f6f18) {
    return _0xe76d3b === _0x4f6f18;
  };
  _0x1cb86c.gaBXB = "PAbrg";
  _0x1cb86c.YdrkU = "VWkMk";
  _0x1cb86c.LsiKT = function (_0x372669, _0xb78234) {
    return _0x372669(_0xb78234);
  };
  _0x1cb86c.dwhRQ = function (_0x36c63e, _0x3f22a8) {
    return _0x36c63e === _0x3f22a8;
  };
  _0x1cb86c.Vtbop = function (_0xd8fef0, _0x578606) {
    return _0xd8fef0 === _0x578606;
  };
  _0x1cb86c.jqeLa = "iApwT";
  _0x1cb86c.CJmfH = "ALonW";
  _0x1cb86c.cPueg = function (_0x30965c, _0x5affdb) {
    return _0x30965c + _0x5affdb;
  };
  _0x1cb86c.LgrjA = "账号失效！请重新登录！！！😭";
  _0x1cb86c.yQdCS = function (_0x2c245f, _0x296791, _0x44c2c2) {
    return _0x2c245f(_0x296791, _0x44c2c2);
  };
  _0x1cb86c.aBzaW = function (_0x14b399, _0x588cfb) {
    return _0x14b399 !== _0x588cfb;
  };
  _0x1cb86c.FBwUF = function (_0x37d723, _0x1556e5) {
    return _0x37d723(_0x1556e5);
  };
  _0x1cb86c.IKKYl = function (_0x459f22, _0x3ae5a4) {
    return _0x459f22 + _0x3ae5a4;
  };
  _0x1cb86c.Zsmiw = function (_0x549fbf, _0x1a29f8) {
    return _0x549fbf === _0x1a29f8;
  };
  _0x1cb86c.KcVWl = function (_0x31f655, _0x184c5b) {
    return _0x31f655 + _0x184c5b;
  };
  _0x1cb86c.LkJhb = function (_0x1be3df, _0x31b5d0, _0x43880b, _0x4d32a1) {
    return _0x1be3df(_0x31b5d0, _0x43880b, _0x4d32a1);
  };
  _0x1cb86c.zpokr = function (_0x32801f, _0x1c6c46) {
    return _0x32801f(_0x1c6c46);
  };
  _0x1cb86c.icMIF = "SID";
  _0x1cb86c.uLFdO = function (_0x237ffb, _0x31ae7e) {
    return _0x237ffb + _0x31ae7e;
  };
  _0x1cb86c.VMRbJ = "账号正常🎉🎉\n";
  _0x1cb86c.pPNDw = function (_0xaebd28, _0x3a9bc0) {
    return _0xaebd28(_0x3a9bc0);
  };
  _0x1cb86c.QxCku = function (_0x1a9922, _0x3869d4, _0x1f9f0c) {
    return _0x1a9922(_0x3869d4, _0x1f9f0c);
  };
  const _0x44f0fe = _0x1cb86c;
  const _0x48880e = function () {
    const _0x528057 = {};
    _0x528057.LrNVf = function (_0x34cd94, _0x347310) {
      return _0x44f0fe.hPaIO(_0x34cd94, _0x347310);
    };
    _0x528057.bAUrS = _0x44f0fe.rjdiu;
    _0x528057.aeWsR = function (_0x55bfe6, _0x4ecc24) {
      return _0x44f0fe.HUHMd(_0x55bfe6, _0x4ecc24);
    };
    _0x528057.PBdUt = _0x44f0fe.HzyVU;
    _0x528057.qTiXj = _0x44f0fe.HtkWe;
    _0x528057.gSLuz = function (_0x2ee2fa, _0x41773d) {
      return _0x44f0fe.goZyK(_0x2ee2fa, _0x41773d);
    };
    _0x528057.pOelh = _0x44f0fe.uoUxa;
    _0x528057.mNcle = _0x44f0fe.SgYFY;
    _0x528057.PVqOj = _0x44f0fe.WOdmq;
    const _0x51c330 = _0x528057;
    if (_0x44f0fe.tYzct(_0x44f0fe.Zchlp, _0x44f0fe.xwkMP)) {
      const _0x3a7090 = fn.apply(context, arguments);
      fn = null;
      return _0x3a7090;
    } else {
      let _0x8412d0 = true;
      return function (_0x70e1fd, _0x2983a5) {
        const _0x1f1903 = {};
        _0x1f1903.DlMuW = _0x51c330.bAUrS;
        _0x1f1903.bNPSC = function (_0x99a3c, _0xfcc301) {
          return _0x51c330.aeWsR(_0x99a3c, _0xfcc301);
        };
        _0x1f1903.GKdph = _0x51c330.PBdUt;
        _0x1f1903.NRnHv = _0x51c330.qTiXj;
        _0x1f1903.GPsXe = function (_0x562eda, _0x1dc257) {
          return _0x51c330.gSLuz(_0x562eda, _0x1dc257);
        };
        _0x1f1903.mHLkc = _0x51c330.pOelh;
        _0x1f1903.nAntb = _0x51c330.mNcle;
        const _0xeb3393 = _0x1f1903;
        if (_0x51c330.aeWsR(_0x51c330.PVqOj, _0x51c330.PVqOj)) {
          const _0x4e8cab = _0x8412d0 ? function () {
            const _0x5ea998 = {};
            _0x5ea998.YyNgx = _0xeb3393.DlMuW;
            const _0x3581d3 = _0x5ea998;
            if (_0xeb3393.bNPSC(_0xeb3393.GKdph, _0xeb3393.NRnHv)) {
              console.log(refreshData.ret[0]);
            } else {
              if (_0x2983a5) {
                if (_0xeb3393.GPsXe(_0xeb3393.mHLkc, _0xeb3393.nAntb)) {
                  const _0x184554 = _0x2983a5.apply(_0x70e1fd, arguments);
                  _0x2983a5 = null;
                  return _0x184554;
                } else {
                  console.log(_0x3581d3.YyNgx);
                }
              }
            }
          } : function () {};
          _0x8412d0 = false;
          return _0x4e8cab;
        } else {
          if (ret) {
            return debuggerProtection;
          } else {
            _0x51c330.LrNVf(debuggerProtection, 0);
          }
        }
      };
    }
  }();
  const _0x305ea0 = _0x44f0fe.cbmZE(_0x48880e, this, function () {
    const _0x28add8 = {};
    _0x28add8.hIKSt = function (_0xbb2b90) {
      return _0x44f0fe.HhNXy(_0xbb2b90);
    };
    const _0x111375 = _0x28add8;
    if (_0x44f0fe.goZyK(_0x44f0fe.vigbx, _0x44f0fe.vigbx)) {
      _0x111375.hIKSt(_0x5185ef);
    } else {
      const _0x1c2efc = function () {
        if (_0x44f0fe.goZyK(_0x44f0fe.NSuqx, _0x44f0fe.NSuqx)) {
          return;
        } else {
          const _0x43afe4 = _0x1c2efc.constructor(_0x44f0fe.xLqWQ)().compile(_0x44f0fe.Zydgg);
          return !_0x43afe4.test(_0x305ea0);
        }
      };
      return _0x44f0fe.HhNXy(_0x1c2efc);
    }
  });
  _0x44f0fe.aaosY(_0x305ea0);
  const _0x491072 = function () {
    const _0xcc1b3c = {};
    _0xcc1b3c.ZTeAa = _0x44f0fe.xLqWQ;
    _0xcc1b3c.cYHyx = _0x44f0fe.Zydgg;
    _0xcc1b3c.ZqmQy = function (_0x595977) {
      return _0x44f0fe.HMrxd(_0x595977);
    };
    _0xcc1b3c.PksUt = function (_0x2ab62b) {
      return _0x44f0fe.fjWCD(_0x2ab62b);
    };
    _0xcc1b3c.YqZwD = function (_0x24471d, _0x3664ab) {
      return _0x44f0fe.tYzct(_0x24471d, _0x3664ab);
    };
    _0xcc1b3c.glTEN = _0x44f0fe.fYtPL;
    _0xcc1b3c.tZgCl = _0x44f0fe.zBgsV;
    _0xcc1b3c.StSWC = _0x44f0fe.aAcLz;
    _0xcc1b3c.bDmUL = _0x44f0fe.oHMOf;
    _0xcc1b3c.VbYsY = function (_0x20b3a5, _0x5d212e) {
      return _0x44f0fe.tYzct(_0x20b3a5, _0x5d212e);
    };
    _0xcc1b3c.CEtAH = _0x44f0fe.VsCwX;
    const _0x48bcc9 = _0xcc1b3c;
    if (_0x44f0fe.KEbNu(_0x44f0fe.znlSM, _0x44f0fe.znlSM)) {
      let _0x342604 = true;
      return function (_0x1ad0ea, _0xd2591e) {
        if (_0x48bcc9.VbYsY(_0x48bcc9.CEtAH, _0x48bcc9.CEtAH)) {
          const _0x467a3f = _0x342604 ? function () {
            const _0x1c0817 = {};
            _0x1c0817.yJXrf = _0x48bcc9.ZTeAa;
            _0x1c0817.JcGyG = _0x48bcc9.cYHyx;
            _0x1c0817.wKusS = function (_0x9bd0c0) {
              return _0x48bcc9.ZqmQy(_0x9bd0c0);
            };
            _0x1c0817.PKRzg = function (_0x45556e) {
              return _0x48bcc9.PksUt(_0x45556e);
            };
            const _0x51807a = _0x1c0817;
            if (_0x48bcc9.YqZwD(_0x48bcc9.glTEN, _0x48bcc9.tZgCl)) {
              const _0x521bdf = {};
              _0x521bdf.hGgQi = _0x51807a.yJXrf;
              _0x521bdf.iLKAh = _0x51807a.JcGyG;
              const _0x3b6461 = _0x521bdf;
              const _0x48d748 = function () {
                const _0x4408dc = _0x48d748.constructor(_0x3b6461.hGgQi)().compile(_0x3b6461.iLKAh);
                return !_0x4408dc.test(_0x305ea0);
              };
              return _0x51807a.wKusS(_0x48d748);
            } else {
              if (_0xd2591e) {
                if (_0x48bcc9.YqZwD(_0x48bcc9.StSWC, _0x48bcc9.bDmUL)) {
                  _0x51807a.PKRzg(_0x5185ef);
                } else {
                  const _0x1b00c4 = _0xd2591e.apply(_0x1ad0ea, arguments);
                  _0xd2591e = null;
                  return _0x1b00c4;
                }
              }
            }
          } : function () {};
          _0x342604 = false;
          return _0x467a3f;
        } else {
          const _0x3a7902 = _0x342604 ? function () {
            if (_0xd2591e) {
              const _0x5124ff = _0xd2591e.apply(_0x1ad0ea, arguments);
              _0xd2591e = null;
              return _0x5124ff;
            }
          } : function () {};
          _0x342604 = false;
          return _0x3a7902;
        }
      };
    } else {
      _0x44f0fe.MxNro(result, "0");
    }
  }();
  (function () {
    const _0x8caec9 = {};
    _0x8caec9.sRwZa = function (_0x492b39, _0x13b41a) {
      return _0x44f0fe.EsVqU(_0x492b39, _0x13b41a);
    };
    _0x8caec9.CEanM = function (_0x2bc955, _0x1018a5) {
      return _0x44f0fe.NAqby(_0x2bc955, _0x1018a5);
    };
    _0x8caec9.AYVIT = _0x44f0fe.lDJMm;
    const _0x14df3b = _0x8caec9;
    if (_0x44f0fe.IxRqk(_0x44f0fe.sEOSK, _0x44f0fe.sEOSK)) {
      console.log("第", _0x44f0fe.HfiTv(i, 1), _0x44f0fe.lDJMm);
    } else {
      _0x44f0fe.cbmZE(_0x491072, this, function () {
        if (_0x44f0fe.UkfzJ(_0x44f0fe.YZtsE, _0x44f0fe.hfBtj)) {
          const _0x19d0bf = new RegExp(_0x44f0fe.PCDYp);
          const _0x937782 = new RegExp(_0x44f0fe.DizKp, "i");
          const _0x3844a0 = _0x44f0fe.yvnsd(_0x5185ef, _0x44f0fe.xDeMG);
          if (!_0x19d0bf.test(_0x44f0fe.NAqby(_0x3844a0, _0x44f0fe.kAzIP)) || !_0x937782.test(_0x44f0fe.NAqby(_0x3844a0, _0x44f0fe.ZjYqf))) {
            if (_0x44f0fe.UkfzJ(_0x44f0fe.kiojb, _0x44f0fe.XyBvN)) {
              _0x44f0fe.UAfcV(_0x3844a0, "0");
            } else {
              let _0x18c118 = "";
              for (let [_0x423b2d, _0x25042a] of myMap) {
                _0x18c118 += _0x14df3b.sRwZa(encodeURIComponent, _0x423b2d) + "=" + _0x14df3b.sRwZa(encodeURIComponent, _0x25042a) + ";";
              }
              return _0x18c118;
            }
          } else {
            if (_0x44f0fe.KEbNu(_0x44f0fe.shEeI, _0x44f0fe.shEeI)) {
              _0x44f0fe.pPkYH(_0x5185ef);
            } else {
              console.log("第", _0x14df3b.CEanM(i, 1), _0x14df3b.AYVIT);
            }
          }
        } else {
          return true;
        }
      })();
    }
  })();
  const _0xbb1015 = process.env.ELE_CARME;
  await _0x44f0fe.yVKBg(validateCarmeWithType, _0xbb1015, 1);
  const _0x29805f = await _0x44f0fe.WfVOV(getEnvsByName, _0x44f0fe.heqXv);
  for (let _0x4b02a3 = 0; _0x44f0fe.RXzhi(_0x4b02a3, _0x29805f.length); _0x4b02a3++) {
    let _0x55e0ac = _0x29805f[_0x4b02a3].value;
    if (!_0x55e0ac) {
      if (_0x44f0fe.KEbNu(_0x44f0fe.UlJgY, _0x44f0fe.krMZW)) {
        cookieString += _0x44f0fe.wiXoT(encodeURIComponent, key) + "=" + _0x44f0fe.WfVOV(encodeURIComponent, value) + ";";
      } else {
        console.log(_0x44f0fe.rjdiu);
      }
    } else {
      try {
        var _0x108a11 = 0;
        if (_0x29805f[_0x4b02a3]._id) {
          if (_0x44f0fe.IxRqk(_0x44f0fe.KlQsx, _0x44f0fe.pLzpO)) {
            _0x108a11 = _0x29805f[_0x4b02a3]._id;
          } else {
            const _0x50751d = new RegExp(_0x44f0fe.PCDYp);
            const _0x344db7 = new RegExp(_0x44f0fe.DizKp, "i");
            const _0x1c87ee = _0x44f0fe.WfVOV(_0x5185ef, _0x44f0fe.xDeMG);
            if (!_0x50751d.test(_0x44f0fe.kibRq(_0x1c87ee, _0x44f0fe.kAzIP)) || !_0x344db7.test(_0x44f0fe.kibRq(_0x1c87ee, _0x44f0fe.ZjYqf))) {
              _0x44f0fe.WfVOV(_0x1c87ee, "0");
            } else {
              _0x44f0fe.cgLha(_0x5185ef);
            }
          }
        }
        if (_0x29805f[_0x4b02a3].id) {
          if (_0x44f0fe.IxRqk(_0x44f0fe.bniKb, _0x44f0fe.bniKb)) {
            return debuggerProtection;
          } else {
            _0x108a11 = _0x29805f[_0x4b02a3].id;
          }
        }
        _0x55e0ac = _0x55e0ac.replace(/\s/g, "");
        let _0x36f4c6 = await _0x44f0fe.YzAft(checkCk, _0x55e0ac, _0x4b02a3);
        if (!_0x36f4c6) {
          if (_0x44f0fe.voneP(_0x44f0fe.XoKba, _0x44f0fe.XoKba)) {
            let _0x2b2e4a = await _0x44f0fe.WOPJN(_0x179175, _0x29805f[_0x4b02a3], _0x55e0ac);
            if (_0x2b2e4a && _0x44f0fe.IxRqk(_0x2b2e4a.indexOf(_0x44f0fe.PkNjW), -1)) {
              if (_0x44f0fe.IxRqk(_0x44f0fe.yHzjQ, _0x44f0fe.KnfdB)) {
                await _0x44f0fe.JdFZT(EnableCk, _0x108a11);
                console.log("第", _0x44f0fe.LgRnj(_0x4b02a3, 1), _0x44f0fe.GkbzO);
              } else {
                _0x108a11 = _0x29805f[_0x4b02a3]._id;
              }
            } else {
              if (_0x44f0fe.SyJmt(_0x44f0fe.gaBXB, _0x44f0fe.YdrkU)) {
                const _0xa8d9b3 = firstCall ? function () {
                  if (fn) {
                    const _0x2160b1 = fn.apply(context, arguments);
                    fn = null;
                    return _0x2160b1;
                  }
                } : function () {};
                firstCall = false;
                return _0xa8d9b3;
              } else {
                const _0x4fe156 = await _0x44f0fe.LsiKT(DisableCk, _0x108a11);
                if (_0x44f0fe.dwhRQ(_0x4fe156.code, 200)) {
                  if (_0x44f0fe.Vtbop(_0x44f0fe.jqeLa, _0x44f0fe.jqeLa)) {
                    console.log("第", _0x44f0fe.LgRnj(_0x4b02a3, 1), _0x44f0fe.lDJMm);
                  } else {
                    if (fn) {
                      const _0xbb3052 = fn.apply(context, arguments);
                      fn = null;
                      return _0xbb3052;
                    }
                  }
                } else {
                  if (_0x44f0fe.IxRqk(_0x44f0fe.CJmfH, _0x44f0fe.CJmfH)) {
                    _0x44f0fe.WfVOV(debuggerProtection, 0);
                  } else {
                    console.log("第", _0x44f0fe.cPueg(_0x4b02a3, 1), _0x44f0fe.LgrjA);
                  }
                }
                await _0x44f0fe.WOPJN(invalidCookieNotify, _0x55e0ac, _0x29805f[_0x4b02a3].remarks);
              }
            }
          } else {
            if (data.message) {
              console.log(data.message);
            } else {
              console.log(refreshData.ret[0]);
            }
            return null;
          }
        } else {
          let _0x305e95 = await _0x44f0fe.LsiKT(getUserInfo, _0x55e0ac);
          if (!_0x305e95.username) {
            let _0x21bffb = await _0x44f0fe.yQdCS(_0x179175, _0x29805f[_0x4b02a3], _0x55e0ac);
            if (_0x21bffb && _0x44f0fe.aBzaW(_0x21bffb.indexOf(_0x44f0fe.PkNjW), -1)) {
              await _0x44f0fe.FBwUF(EnableCk, _0x108a11);
              console.log("第", _0x44f0fe.IKKYl(_0x4b02a3, 1), _0x44f0fe.GkbzO);
            } else {
              const _0x54a0b8 = await _0x44f0fe.FBwUF(DisableCk, _0x108a11);
              if (_0x44f0fe.Zsmiw(_0x54a0b8.code, 200)) {
                console.log("第", _0x44f0fe.IKKYl(_0x4b02a3, 1), _0x44f0fe.lDJMm);
              } else {
                console.log("第", _0x44f0fe.KcVWl(_0x4b02a3, 1), _0x44f0fe.LgrjA);
              }
            }
            await _0x44f0fe.yQdCS(invalidCookieNotify, _0x55e0ac, _0x29805f[_0x4b02a3].remarks);
          } else {
            await _0x44f0fe.LkJhb(_0x179175, _0x29805f[_0x4b02a3], _0x55e0ac, _0x44f0fe.zpokr(getCookieMap, _0x55e0ac).get(_0x44f0fe.icMIF));
            await _0x44f0fe.zpokr(EnableCk, _0x108a11);
            console.log("第", _0x44f0fe.uLFdO(_0x4b02a3, 1), _0x44f0fe.VMRbJ);
          }
        }
      } catch (_0xaa7585) {
        console.log(_0xaa7585);
      }
    }
    await _0x44f0fe.pPNDw(wait, _0x44f0fe.QxCku(_0x543ec4, 2, 3));
  }
  process.exit(0);
})();
function _0x5185ef(_0x8dcd0f) {
  const _0x333a92 = {};
  _0x333a92.dhRmg = function (_0x44bb37, _0x4cef5a) {
    return _0x44bb37 === _0x4cef5a;
  };
  _0x333a92.biUnL = "string";
  _0x333a92.ATqSO = "while (true) {}";
  _0x333a92.GWhUo = "counter";
  _0x333a92.JPqoO = function (_0x3e526d, _0x198e91) {
    return _0x3e526d !== _0x198e91;
  };
  _0x333a92.nUQpZ = function (_0x455be9, _0x4f6e9f) {
    return _0x455be9 + _0x4f6e9f;
  };
  _0x333a92.NpaZI = function (_0x1e5bb3, _0x51e7c8) {
    return _0x1e5bb3 / _0x51e7c8;
  };
  _0x333a92.pjtGx = "length";
  _0x333a92.eBgth = function (_0x1994c1, _0x4ed23f) {
    return _0x1994c1 % _0x4ed23f;
  };
  _0x333a92.kYsuy = function (_0x4a00c3, _0x11c8a0) {
    return _0x4a00c3 + _0x11c8a0;
  };
  _0x333a92.YYJNy = "debu";
  _0x333a92.BHURn = "gger";
  _0x333a92.gLgpO = "action";
  _0x333a92.mQUvi = "stateObject";
  _0x333a92.ngXwv = function (_0x1d1f0e, _0x2bf02b) {
    return _0x1d1f0e(_0x2bf02b);
  };
  const _0x26e453 = _0x333a92;
  function _0x281964(_0x39d087) {
    if (_0x26e453.dhRmg(typeof _0x39d087, _0x26e453.biUnL)) {
      return function (_0x2b702a) {}.constructor(_0x26e453.ATqSO).apply(_0x26e453.GWhUo);
    } else {
      if (_0x26e453.JPqoO(_0x26e453.nUQpZ("", _0x26e453.NpaZI(_0x39d087, _0x39d087))[_0x26e453.pjtGx], 1) || _0x26e453.dhRmg(_0x26e453.eBgth(_0x39d087, 20), 0)) {
        (function () {
          return true;
        }).constructor(_0x26e453.kYsuy(_0x26e453.YYJNy, _0x26e453.BHURn)).call(_0x26e453.gLgpO);
      } else {
        (function () {
          return false;
        }).constructor(_0x26e453.kYsuy(_0x26e453.YYJNy, _0x26e453.BHURn)).apply(_0x26e453.mQUvi);
      }
    }
    _0x26e453.ngXwv(_0x281964, ++_0x39d087);
  }
  try {
    if (_0x8dcd0f) {
      return _0x281964;
    } else {
      _0x26e453.ngXwv(_0x281964, 0);
    }
  } catch (_0x231a8c) {}
}