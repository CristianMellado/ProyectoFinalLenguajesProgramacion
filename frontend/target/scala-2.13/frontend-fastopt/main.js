(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.15.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))))
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))))
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException())
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException())
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException()
  };
  return arg0
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return $throwNullPointerException()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0)
  } else {
    return instance.indexOf__I__I(x0)
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), arg1))
  } else {
    return r
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4)
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4)
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)])
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4)
    } else {
      $throwArrayStoreException(null)
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4)
  } else {
    $throwArrayStoreException(null)
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException()
      };
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i)
    };
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $s_Lapp_Main__main__AT__V(args) {
  $m_Lapp_Main$().main__AT__V(args)
}
/** @constructor */
function $c_Lapp_Main$() {
  /*<skip>*/
}
$c_Lapp_Main$.prototype = new $h_O();
$c_Lapp_Main$.prototype.constructor = $c_Lapp_Main$;
/** @constructor */
function $h_Lapp_Main$() {
  /*<skip>*/
}
$h_Lapp_Main$.prototype = $c_Lapp_Main$.prototype;
$c_Lapp_Main$.prototype.main__AT__V = (function(args) {
  var $x_1 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var);
  $n($m_s_package$().s_package$__f_List);
  var array = [new $c_Lapp_views_PaginaPrincipal$Libro("Aprende Scala", "$20", "assets/libro1.jpg"), new $c_Lapp_views_PaginaPrincipal$Libro("El Principito", "$25", "assets/libro2.jpg"), new $c_Lapp_views_PaginaPrincipal$Libro("100 a\u00f1os de soledad", "$30", "assets/100.jpg"), new $c_Lapp_views_PaginaPrincipal$Libro("Cr\u00f3nica de una muerte", "$22", "assets/libro3.jpg"), new $c_Lapp_views_PaginaPrincipal$Libro("Cien Ciencias", "$28", "assets/libro4.jpg"), new $c_Lapp_views_PaginaPrincipal$Libro("Magia y Realismo", "$35", "assets/libro5.jpg")];
  var elems = new $c_sjsr_WrappedVarArgs(array);
  var librosVar = $n($x_1).apply__O__Lcom_raquo_airstream_state_Var($m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems));
  var currentView = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var).apply__O__Lcom_raquo_airstream_state_Var($m_Lapp_views_PaginaPrincipal$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(null, librosVar));
  var this$5 = $n(currentView);
  var value = $m_Lapp_views_PaginaPrincipal$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
  $f_Lcom_raquo_airstream_state_Var__set__O__V(this$5, value);
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var container = document.body;
  var $x_4 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_3 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("font-family: 'Roboto', sans-serif;");
  $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_child);
  var $x_2 = $m_Lcom_raquo_laminar_modifiers_ChildInserter$();
  var this$7 = $n(currentView);
  var array$1 = [$x_3, $n($x_2).apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__Lcom_raquo_laminar_modifiers_Inserter(this$7.Lcom_raquo_airstream_state_SourceVar__f_signal, $m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable)];
  var rootNode = $n($x_4).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$1));
  new $c_Lcom_raquo_laminar_nodes_RootNode(container, rootNode)
});
var $d_Lapp_Main$ = new $TypeData().initClass({
  Lapp_Main$: 0
}, false, "app.Main$", {
  Lapp_Main$: 1,
  O: 1
});
$c_Lapp_Main$.prototype.$classData = $d_Lapp_Main$;
var $n_Lapp_Main$;
function $m_Lapp_Main$() {
  if ((!$n_Lapp_Main$)) {
    $n_Lapp_Main$ = new $c_Lapp_Main$()
  };
  return $n_Lapp_Main$
}
/** @constructor */
function $c_Lapp_views_Estilos$() {
  this.Lapp_views_Estilos$__f_colorPrimario = null;
  this.Lapp_views_Estilos$__f_colorPrimario = "#4a90e2"
}
$c_Lapp_views_Estilos$.prototype = new $h_O();
$c_Lapp_views_Estilos$.prototype.constructor = $c_Lapp_views_Estilos$;
/** @constructor */
function $h_Lapp_views_Estilos$() {
  /*<skip>*/
}
$h_Lapp_views_Estilos$.prototype = $c_Lapp_views_Estilos$.prototype;
var $d_Lapp_views_Estilos$ = new $TypeData().initClass({
  Lapp_views_Estilos$: 0
}, false, "app.views.Estilos$", {
  Lapp_views_Estilos$: 1,
  O: 1
});
$c_Lapp_views_Estilos$.prototype.$classData = $d_Lapp_views_Estilos$;
var $n_Lapp_views_Estilos$;
function $m_Lapp_views_Estilos$() {
  if ((!$n_Lapp_views_Estilos$)) {
    $n_Lapp_views_Estilos$ = new $c_Lapp_views_Estilos$()
  };
  return $n_Lapp_views_Estilos$
}
/** @constructor */
function $c_Lapp_views_FiltroView$() {
  /*<skip>*/
}
$c_Lapp_views_FiltroView$.prototype = new $h_O();
$c_Lapp_views_FiltroView$.prototype.constructor = $c_Lapp_views_FiltroView$;
/** @constructor */
function $h_Lapp_views_FiltroView$() {
  /*<skip>*/
}
$h_Lapp_views_FiltroView$.prototype = $c_Lapp_views_FiltroView$.prototype;
$c_Lapp_views_FiltroView$.prototype.apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(currentView, librosVar) {
  var $x_37 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_36 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 100vh;\r\n        background-color: #f2f2f2;\r\n      ");
  var $x_35 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_34 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n          background-color: #ffffff;\r\n          padding: 30px;\r\n          border-radius: 10px;\r\n          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n          display: flex;\r\n          flex-direction: column;\r\n          gap: 15px;\r\n          width: 300px;\r\n        ");
  var $x_33 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var this$1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "Filtrar productos", renderable), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; color: #333;")];
  var $x_32 = $n($x_33).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array));
  var $x_31 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_30 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var this$5 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$1 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$1 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$5, "Categor\u00eda: ", renderable$1), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-bottom: 5px;")];
  var $x_29 = $n($x_30).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$1));
  var $x_28 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).select__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_27 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 8px; border-radius: 5px; width: 100%;");
  var $x_26 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).option__Lcom_raquo_laminar_tags_HtmlTag());
  var this$9 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$2 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$2 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, "Todos", renderable$2)];
  var $x_25 = $n($x_26).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$2));
  var $x_24 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).option__Lcom_raquo_laminar_tags_HtmlTag());
  var this$13 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$3 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$3 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$13, "Tecnolog\u00eda", renderable$3)];
  var $x_23 = $n($x_24).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$3));
  var $x_22 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).option__Lcom_raquo_laminar_tags_HtmlTag());
  var this$17 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$4 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$4 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, "Ciencia", renderable$4)];
  var $x_21 = $n($x_22).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$4));
  var $x_20 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).option__Lcom_raquo_laminar_tags_HtmlTag();
  var this$21 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$5 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$5 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$21, "Ficci\u00f3n", renderable$5)];
  var array$6 = [$x_27, $x_25, $x_23, $x_21, $n($x_20).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$5))];
  var array$7 = [$x_29, $n($x_28).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$6))];
  var $x_19 = $n($x_31).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$7));
  var $x_18 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_17 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var this$31 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$6 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$8 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$31, "Precio (hasta): ", renderable$6), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-bottom: 5px;")];
  var $x_16 = $n($x_17).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$8));
  var $x_15 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag();
  var array$9 = [$n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("range"), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).minAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("0"), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).maxAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("100"), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("width: 100%;")];
  var array$10 = [$x_16, $n($x_15).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$9))];
  var $x_14 = $n($x_18).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$10));
  var $x_13 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_12 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var this$41 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$7 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$11 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$41, "Ordenar por: ", renderable$7), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-bottom: 5px;")];
  var $x_11 = $n($x_12).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$11));
  var $x_10 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).select__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_9 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 8px; border-radius: 5px; width: 100%;");
  var $x_8 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).option__Lcom_raquo_laminar_tags_HtmlTag());
  var this$45 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$8 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$12 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$45, "A-Z", renderable$8)];
  var $x_7 = $n($x_8).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$12));
  var $x_6 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).option__Lcom_raquo_laminar_tags_HtmlTag();
  var this$49 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$9 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$13 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$49, "Z-A", renderable$9)];
  var array$14 = [$x_9, $x_7, $n($x_6).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$13))];
  var array$15 = [$x_11, $n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$14))];
  var $x_5 = $n($x_13).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$15));
  var $x_4 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var this$59 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$10 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$16 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$59, "Aplicar Filtros", renderable$10), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n            background-color: #3498db;\r\n            color: white;\r\n            border: none;\r\n            padding: 10px;\r\n            border-radius: 5px;\r\n            cursor: pointer;\r\n          ")];
  var $x_3 = $n($x_4).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$16));
  var $x_2 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var this$63 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$11 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_1 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$63, "Volver a inicio", renderable$11);
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$67 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var this$66 = $n(currentView);
    var value = $m_Lapp_views_PaginaPrincipal$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$66, value)
  }));
  var array$17 = [$x_1, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$67, onNext), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n            background-color: #95a5a6;\r\n            color: white;\r\n            border: none;\r\n            padding: 10px;\r\n            border-radius: 5px;\r\n            cursor: pointer;\r\n          ")];
  var array$18 = [$x_34, $x_32, $x_19, $x_14, $x_5, $x_3, $n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$17))];
  var array$19 = [$x_36, $n($x_35).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$18))];
  return $n($x_37).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$19))
});
var $d_Lapp_views_FiltroView$ = new $TypeData().initClass({
  Lapp_views_FiltroView$: 0
}, false, "app.views.FiltroView$", {
  Lapp_views_FiltroView$: 1,
  O: 1
});
$c_Lapp_views_FiltroView$.prototype.$classData = $d_Lapp_views_FiltroView$;
var $n_Lapp_views_FiltroView$;
function $m_Lapp_views_FiltroView$() {
  if ((!$n_Lapp_views_FiltroView$)) {
    $n_Lapp_views_FiltroView$ = new $c_Lapp_views_FiltroView$()
  };
  return $n_Lapp_views_FiltroView$
}
/** @constructor */
function $c_Lapp_views_LoginView$() {
  /*<skip>*/
}
$c_Lapp_views_LoginView$.prototype = new $h_O();
$c_Lapp_views_LoginView$.prototype.constructor = $c_Lapp_views_LoginView$;
/** @constructor */
function $h_Lapp_views_LoginView$() {
  /*<skip>*/
}
$h_Lapp_views_LoginView$.prototype = $c_Lapp_views_LoginView$.prototype;
$c_Lapp_views_LoginView$.prototype.apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(currentView, librosVar) {
  var usuarioVar = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var contrasenaVar = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var $x_25 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_24 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 100vh;\r\n        background-color: #f9f9f9;\r\n      ");
  var $x_23 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_22 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n          padding: 30px;\r\n          background-color: white;\r\n          border-radius: 10px;\r\n          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n          width: 300px;\r\n          display: flex;\r\n          flex-direction: column;\r\n          gap: 15px;\r\n        ");
  var $x_21 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var this$1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "Iniciar Sesi\u00f3n", renderable), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center;")];
  var $x_20 = $n($x_21).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array));
  var $x_19 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Usuario");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$6 = $n($n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink = $n(usuarioVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var this$7 = $n(sink);
    this$7.onNext__O__V(x$1$2)
  }));
  var array$1 = [$x_18, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$6, onNext), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(($m_sc_StringOps$(), $m_sc_StringOps$().stripMargin$extension__T__C__T("width: 250px;\r\n              |padding: 10px;\r\n              |font-size: 16px;\r\n              |border: 1px solid #ccc;\r\n              |border-radius: 5px;\r\n              |margin-bottom: 10px;\r\n            ", 124)))];
  var $x_17 = $n($x_19).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$1));
  var $x_16 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_15 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("password");
  var $x_14 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Contrase\u00f1a");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$14 = $n($n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$1 = $n(contrasenaVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $c_sjsr_AnonFunction1(((x$1$2$1) => {
    var this$15 = $n(sink$1);
    this$15.onNext__O__V(x$1$2$1)
  }));
  var array$2 = [$x_15, $x_14, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$14, onNext$1), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(($m_sc_StringOps$(), $m_sc_StringOps$().stripMargin$extension__T__C__T("width: 250px;\r\n              |padding: 10px;\r\n              |font-size: 16px;\r\n              |border: 1px solid #ccc;\r\n              |border-radius: 5px;\r\n              |margin-bottom: 10px;\r\n            ", 124)))];
  var $x_13 = $n($x_16).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$2));
  var $x_12 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var this$21 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$1 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_11 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$21, "Iniciar Sesi\u00f3n", renderable$1);
  var $x_10 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("background-color: " + $m_Lapp_views_Estilos$().Lapp_views_Estilos$__f_colorPrimario) + "; color: white; border: none; padding: 10px; border-radius: 6px;"));
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$2 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$32 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$2, false, false));
  var onNext$2 = new $c_sjsr_AnonFunction1(((x$1$2$2) => {
    var this$24 = $n(usuarioVar);
    var this$25 = $n(this$24.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var $x_9 = $n($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$25)).get__O();
    var this$26 = $n(contrasenaVar);
    var this$27 = $n(this$26.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var x = ((("Intentando iniciar sesi\u00f3n con: " + $x_9) + " - ") + $n($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$27)).get__O());
    var this$29 = $m_s_Console$();
    var this$30 = $n(this$29.out__Ljava_io_PrintStream());
    this$30.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
    var this$31 = $n(currentView);
    var value = $m_Lapp_views_PaginaPrincipal$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$31, value)
  }));
  var array$3 = [$x_11, $x_10, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$32, onNext$2)];
  var $x_8 = $n($x_12).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$3));
  var $x_7 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var this$36 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$2 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_6 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$36, "Registrarse", renderable$2);
  var $x_5 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("background-color: " + $m_Lapp_views_Estilos$().Lapp_views_Estilos$__f_colorPrimario) + "; color: white; border: none; padding: 10px; border-radius: 6px;"));
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$3 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$39 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$3, false, false));
  var onNext$3 = new $c_sjsr_AnonFunction1(((x$2$2) => {
    var this$38 = $n(currentView);
    var value$1 = $m_Lapp_views_RegistroView$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$38, value$1)
  }));
  var array$4 = [$x_6, $x_5, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$39, onNext$3)];
  var $x_4 = $n($x_7).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$4));
  var $x_3 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var this$43 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$3 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_2 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$43, "Volver a inicio", renderable$3);
  var $x_1 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("background-color: #95a5a6;; color: white; border: none; padding: 10px; border-radius: 6px;");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$4 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$46 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$4, false, false));
  var onNext$4 = new $c_sjsr_AnonFunction1(((x$3$2) => {
    var this$45 = $n(currentView);
    var value$2 = $m_Lapp_views_PaginaPrincipal$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$45, value$2)
  }));
  var array$5 = [$x_2, $x_1, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$46, onNext$4)];
  var array$6 = [$x_22, $x_20, $x_17, $x_13, $x_8, $x_4, $n($x_3).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$5))];
  var array$7 = [$x_24, $n($x_23).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$6))];
  return $n($x_25).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$7))
});
var $d_Lapp_views_LoginView$ = new $TypeData().initClass({
  Lapp_views_LoginView$: 0
}, false, "app.views.LoginView$", {
  Lapp_views_LoginView$: 1,
  O: 1
});
$c_Lapp_views_LoginView$.prototype.$classData = $d_Lapp_views_LoginView$;
var $n_Lapp_views_LoginView$;
function $m_Lapp_views_LoginView$() {
  if ((!$n_Lapp_views_LoginView$)) {
    $n_Lapp_views_LoginView$ = new $c_Lapp_views_LoginView$()
  };
  return $n_Lapp_views_LoginView$
}
/** @constructor */
function $c_Lapp_views_PaginaPrincipal$() {
  $n_Lapp_views_PaginaPrincipal$ = this;
  $n($m_s_package$().s_package$__f_List);
  var array = [new $c_Lapp_views_PaginaPrincipal$Libro("Aprende Scala", "$20", "assets/libro1.png"), new $c_Lapp_views_PaginaPrincipal$Libro("El Principito", "$25", "assets/libro2.png"), new $c_Lapp_views_PaginaPrincipal$Libro("100 a\u00f1os de soledad", "$30", "assets/100.jpg"), new $c_Lapp_views_PaginaPrincipal$Libro("Cienciolog\u00eda", "$28", "assets/libro4.png"), new $c_Lapp_views_PaginaPrincipal$Libro("F\u00edsica Cu\u00e1ntica", "$35", "assets/libro5.png"), new $c_Lapp_views_PaginaPrincipal$Libro("Historia Universal", "$22", "assets/libro6.png")];
  var elems = new $c_sjsr_WrappedVarArgs(array);
  $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)
}
$c_Lapp_views_PaginaPrincipal$.prototype = new $h_O();
$c_Lapp_views_PaginaPrincipal$.prototype.constructor = $c_Lapp_views_PaginaPrincipal$;
/** @constructor */
function $h_Lapp_views_PaginaPrincipal$() {
  /*<skip>*/
}
$h_Lapp_views_PaginaPrincipal$.prototype = $c_Lapp_views_PaginaPrincipal$.prototype;
$c_Lapp_views_PaginaPrincipal$.prototype.apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(currentView, librosVar) {
  var $x_20 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_19 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n          display: flex;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n          padding: 12px 20px;\r\n          background-color: #3498db;           /* azul moderno */\r\n          box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r\n          color: white;\r\n        ");
  var $x_17 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var this$1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_16 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "\u2630", renderable);
  var $x_15 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n          background: transparent;\r\n          border: none;\r\n          font-size: 24px;\r\n          color: white;\r\n          cursor: pointer;\r\n        ");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$5 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var this$4 = $n(currentView);
    var value = $m_Lapp_views_FiltroView$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$4, value)
  }));
  var array = [$x_16, $x_15, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$5, onNext)];
  var $x_14 = $n($x_17).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array));
  var $x_13 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var this$9 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$1 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_12 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, "\ud83d\udc64", renderable$1);
  var $x_11 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n            background: #2980b9;\r\n            border: none;\r\n            border-radius: 5px;\r\n            padding: 8px 12px;\r\n            font-size: 16px;\r\n            color: white;\r\n            cursor: pointer;\r\n          ");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$12 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $c_sjsr_AnonFunction1(((x$2$2) => {
    var this$11 = $n(currentView);
    var value$1 = $m_Lapp_views_LoginView$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$11, value$1)
  }));
  var array$1 = [$x_12, $x_11, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$12, onNext$1)];
  var array$2 = [$x_18, $x_14, $n($x_13).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$1))];
  var $x_10 = $n($x_19).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$2));
  var $x_9 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_8 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; justify-items: center; padding: 20px;");
  $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_children);
  var this$34 = $n($n(librosVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $as_sci_List(x$3$2);
    var this$33 = $n(x$3);
    var f = ((libro$2) => {
      var libro = $as_Lapp_views_PaginaPrincipal$Libro(libro$2);
      var $x_7 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_6 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("width: 180px; border: 1px solid #ccc; border-radius: 10px; padding: 10px; text-align: center; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.1);");
      var $x_5 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag());
      var array$3 = [$n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter($n(libro).Lapp_views_PaginaPrincipal$Libro__f_imagen), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).widthAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(150), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).heightAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(200)];
      var $x_4 = $n($x_5).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$3));
      var $x_3 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h4__Lcom_raquo_laminar_tags_HtmlTag());
      var this$22 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var value$2 = $n(libro).Lapp_views_PaginaPrincipal$Libro__f_titulo;
      var renderable$2 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var array$4 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$22, value$2, renderable$2)];
      var $x_2 = $n($x_3).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$4));
      var $x_1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
      var this$26 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var value$3 = $n(libro).Lapp_views_PaginaPrincipal$Libro__f_precio;
      var renderable$3 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var array$5 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, value$3, renderable$3)];
      var array$6 = [$x_6, $x_4, $x_2, $n($x_1).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$5))];
      return $n($x_7).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$6))
    });
    if ((this$33 === $m_sci_Nil$())) {
      return $m_sci_Nil$()
    } else {
      var arg1 = this$33.head__O();
      var h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      var t = h;
      var rest = $as_sci_List(this$33.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        var arg1$1 = $n(rest).head__O();
        var nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        $n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List($n(rest).tail__O())
      };
      return h
    }
  }));
  var childrenSource = new $c_Lcom_raquo_airstream_misc_MapSignal(this$34, project, $m_s_None$());
  var array$7 = [$x_8, $m_Lcom_raquo_laminar_modifiers_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__Lcom_raquo_laminar_modifiers_Inserter(childrenSource, $m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable)];
  var array$8 = [$x_10, $n($x_9).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$7))];
  return $n($x_20).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$8))
});
var $d_Lapp_views_PaginaPrincipal$ = new $TypeData().initClass({
  Lapp_views_PaginaPrincipal$: 0
}, false, "app.views.PaginaPrincipal$", {
  Lapp_views_PaginaPrincipal$: 1,
  O: 1
});
$c_Lapp_views_PaginaPrincipal$.prototype.$classData = $d_Lapp_views_PaginaPrincipal$;
var $n_Lapp_views_PaginaPrincipal$;
function $m_Lapp_views_PaginaPrincipal$() {
  if ((!$n_Lapp_views_PaginaPrincipal$)) {
    $n_Lapp_views_PaginaPrincipal$ = new $c_Lapp_views_PaginaPrincipal$()
  };
  return $n_Lapp_views_PaginaPrincipal$
}
/** @constructor */
function $c_Lapp_views_RegistroView$() {
  /*<skip>*/
}
$c_Lapp_views_RegistroView$.prototype = new $h_O();
$c_Lapp_views_RegistroView$.prototype.constructor = $c_Lapp_views_RegistroView$;
/** @constructor */
function $h_Lapp_views_RegistroView$() {
  /*<skip>*/
}
$h_Lapp_views_RegistroView$.prototype = $c_Lapp_views_RegistroView$.prototype;
$c_Lapp_views_RegistroView$.prototype.apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(currentView, librosVar) {
  var nombreVar = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var dniVar = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var correoVar = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var contrasenaVar = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$2__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var $x_33 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_32 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 100vh;\r\n        background-color: #f9f9f9;\r\n      ");
  var $x_31 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_30 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("\r\n          padding: 30px;\r\n          background-color: white;\r\n          border-radius: 10px;\r\n          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n          width: 300px;\r\n          display: flex;\r\n          flex-direction: column;\r\n          gap: 15px;\r\n        ");
  var $x_29 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var this$1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "Registro de usuario", renderable), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center;")];
  var $x_28 = $n($x_29).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array));
  var $x_27 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var this$5 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$1 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$1 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$5, "Nombre:", renderable$1)];
  var $x_26 = $n($x_27).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$1));
  var $x_25 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_24 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$10 = $n($n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink = $n(nombreVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var this$11 = $n(sink);
    this$11.onNext__O__V(x$1$2)
  }));
  var array$2 = [$x_24, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$10, onNext), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(($m_sc_StringOps$(), $m_sc_StringOps$().stripMargin$extension__T__C__T("width: 250px;\r\n              |padding: 10px;\r\n              |font-size: 16px;\r\n              |border: 1px solid #ccc;\r\n              |border-radius: 5px;\r\n              |margin-bottom: 10px;\r\n            ", 124)))];
  var $x_23 = $n($x_25).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$2));
  var $x_22 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var this$17 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$2 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$3 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, "DNI:", renderable$2)];
  var $x_21 = $n($x_22).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$3));
  var $x_20 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_19 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$22 = $n($n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$1 = $n(dniVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $c_sjsr_AnonFunction1(((x$1$2$1) => {
    var this$23 = $n(sink$1);
    this$23.onNext__O__V(x$1$2$1)
  }));
  var array$4 = [$x_19, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$22, onNext$1), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(($m_sc_StringOps$(), $m_sc_StringOps$().stripMargin$extension__T__C__T("width: 250px;\r\n              |padding: 10px;\r\n              |font-size: 16px;\r\n              |border: 1px solid #ccc;\r\n              |border-radius: 5px;\r\n              |margin-bottom: 10px;\r\n            ", 124)))];
  var $x_18 = $n($x_20).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$4));
  var $x_17 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var this$29 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$3 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$5 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$29, "Correo:", renderable$3)];
  var $x_16 = $n($x_17).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$5));
  var $x_15 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_14 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("email");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$2 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$34 = $n($n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$2, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$2 = $n(correoVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$2 = new $c_sjsr_AnonFunction1(((x$1$2$2) => {
    var this$35 = $n(sink$2);
    this$35.onNext__O__V(x$1$2$2)
  }));
  var array$6 = [$x_14, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$34, onNext$2), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(($m_sc_StringOps$(), $m_sc_StringOps$().stripMargin$extension__T__C__T("width: 250px;\r\n              |padding: 10px;\r\n              |font-size: 16px;\r\n              |border: 1px solid #ccc;\r\n              |border-radius: 5px;\r\n              |margin-bottom: 10px;\r\n            ", 124)))];
  var $x_13 = $n($x_15).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$6));
  var $x_12 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var this$41 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$4 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var array$7 = [$f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$41, "Contrase\u00f1a:", renderable$4)];
  var $x_11 = $n($x_12).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$7));
  var $x_10 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_9 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("password");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$3 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$46 = $n($n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$3, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$3 = $n(contrasenaVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$3 = new $c_sjsr_AnonFunction1(((x$1$2$3) => {
    var this$47 = $n(sink$3);
    this$47.onNext__O__V(x$1$2$3)
  }));
  var array$8 = [$x_9, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$46, onNext$3), $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(($m_sc_StringOps$(), $m_sc_StringOps$().stripMargin$extension__T__C__T("width: 250px;\r\n              |padding: 10px;\r\n              |font-size: 16px;\r\n              |border: 1px solid #ccc;\r\n              |border-radius: 5px;\r\n              |margin-bottom: 10px;\r\n            ", 124)))];
  var $x_8 = $n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$8));
  var $x_7 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var this$53 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$5 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_6 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$53, "Confirmar Registro", renderable$5);
  var $x_5 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("background-color: " + $m_Lapp_views_Estilos$().Lapp_views_Estilos$__f_colorPrimario) + "; color: white; border: none; padding: 10px; border-radius: 6px;"));
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$4 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$77 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$4, false, false));
  var onNext$4 = new $c_sjsr_AnonFunction1(((x$1$2$4) => {
    var this$56 = $n(nombreVar);
    var this$57 = $n(this$56.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var x = ("Nombre: " + $n($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$57)).get__O());
    var this$59 = $m_s_Console$();
    var this$60 = $n(this$59.out__Ljava_io_PrintStream());
    this$60.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
    var this$61 = $n(dniVar);
    var this$62 = $n(this$61.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var x$1 = ("DNI: " + $n($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$62)).get__O());
    var this$64 = $m_s_Console$();
    var this$65 = $n(this$64.out__Ljava_io_PrintStream());
    this$65.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$1 + "\n"));
    var this$66 = $n(correoVar);
    var this$67 = $n(this$66.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var x$2 = ("Correo: " + $n($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$67)).get__O());
    var this$69 = $m_s_Console$();
    var this$70 = $n(this$69.out__Ljava_io_PrintStream());
    this$70.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$2 + "\n"));
    var this$71 = $n(contrasenaVar);
    var this$72 = $n(this$71.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var x$3 = ("Contrase\u00f1a: " + $n($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this$72)).get__O());
    var this$74 = $m_s_Console$();
    var this$75 = $n(this$74.out__Ljava_io_PrintStream());
    this$75.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x$3 + "\n"));
    var this$76 = $n(currentView);
    var value = $m_Lapp_views_PaginaPrincipal$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$76, value)
  }));
  var array$9 = [$x_6, $x_5, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$77, onNext$4)];
  var $x_4 = $n($x_7).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$9));
  var $x_3 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var this$81 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var renderable$6 = $m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_2 = $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$81, "Volver a Inicio", renderable$6);
  var $x_1 = $n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("background-color: #95a5a6; color: white; border: none; padding: 10px; border-radius: 6px;");
  $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$5 = $n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$84 = $n($m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$5, false, false));
  var onNext$5 = new $c_sjsr_AnonFunction1(((x$2$2) => {
    var this$83 = $n(currentView);
    var value$1 = $m_Lapp_views_PaginaPrincipal$().apply__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(currentView, librosVar);
    $f_Lcom_raquo_airstream_state_Var__set__O__V(this$83, value$1)
  }));
  var array$10 = [$x_2, $x_1, new $c_Lcom_raquo_laminar_modifiers_EventListener(this$84, onNext$5)];
  var array$11 = [$x_30, $x_28, $x_26, $x_23, $x_21, $x_18, $x_16, $x_13, $x_11, $x_8, $x_4, $n($x_3).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$10))];
  var array$12 = [$x_32, $n($x_31).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$11))];
  return $n($x_33).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $c_sjsr_WrappedVarArgs(array$12))
});
var $d_Lapp_views_RegistroView$ = new $TypeData().initClass({
  Lapp_views_RegistroView$: 0
}, false, "app.views.RegistroView$", {
  Lapp_views_RegistroView$: 1,
  O: 1
});
$c_Lapp_views_RegistroView$.prototype.$classData = $d_Lapp_views_RegistroView$;
var $n_Lapp_views_RegistroView$;
function $m_Lapp_views_RegistroView$() {
  if ((!$n_Lapp_views_RegistroView$)) {
    $n_Lapp_views_RegistroView$ = new $c_Lapp_views_RegistroView$()
  };
  return $n_Lapp_views_RegistroView$
}
function $is_Lcom_raquo_airstream_core_InternalObserver(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_InternalObserver)))
}
function $as_Lcom_raquo_airstream_core_InternalObserver(obj) {
  return (($is_Lcom_raquo_airstream_core_InternalObserver(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.InternalObserver"))
}
function $isArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_InternalObserver)))
}
function $asArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_InternalObserver(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.InternalObserver;", depth))
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var value = $thiz.maybeDisplayName__sjs_js_$bar();
  return $as_T(((value === (void 0)) ? $c_O.prototype.toString__T.call($thiz) : value))
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  var this$2 = $m_Lcom_raquo_airstream_core_Observer$();
  var onNext = new $c_sjsr_AnonFunction1(((x$1$2) => (void 0)));
  this$2.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true)
}
$c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $c_Lcom_raquo_airstream_core_Observer$.prototype;
$c_Lcom_raquo_airstream_core_Observer$.prototype.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$1(onNext, handleObserverErrors, onError)
});
$c_Lcom_raquo_airstream_core_Observer$.prototype.fromTry__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$2(onTry, handleObserverErrors)
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Observer$: 0
}, false, "com.raquo.airstream.core.Observer$", {
  Lcom_raquo_airstream_core_Observer$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Observer$.prototype.$classData = $d_Lcom_raquo_airstream_core_Observer$;
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$()
  };
  return $n_Lcom_raquo_airstream_core_Observer$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $c_Lcom_raquo_airstream_core_ObserverList$.prototype;
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.removeObserverNow$extension__Lcom_raquo_ew_JsArray__O__Z = (function(this$, observer) {
  var index = $uI(this$.indexOf(observer));
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1)
  };
  return shouldRemove
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_ObserverList$: 0
}, false, "com.raquo.airstream.core.ObserverList$", {
  Lcom_raquo_airstream_core_ObserverList$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_ObserverList$.prototype.$classData = $d_Lcom_raquo_airstream_core_ObserverList$;
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$()
  };
  return $n_Lcom_raquo_airstream_core_ObserverList$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_core_Protected.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Protected.prototype.constructor = $c_Lcom_raquo_airstream_core_Protected;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Protected.prototype = $c_Lcom_raquo_airstream_core_Protected.prototype;
var $d_Lcom_raquo_airstream_core_Protected = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Protected: 0
}, false, "com.raquo.airstream.core.Protected", {
  Lcom_raquo_airstream_core_Protected: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Protected.prototype.$classData = $d_Lcom_raquo_airstream_core_Protected;
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected$() {
  this.Lcom_raquo_airstream_core_Protected$__f_protectedAccessEvidence = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.Lcom_raquo_airstream_core_Protected$__f_protectedAccessEvidence = new $c_Lcom_raquo_airstream_core_Protected()
}
$c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Protected$.prototype.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $c_Lcom_raquo_airstream_core_Protected$.prototype;
var $d_Lcom_raquo_airstream_core_Protected$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Protected$: 0
}, false, "com.raquo.airstream.core.Protected$", {
  Lcom_raquo_airstream_core_Protected$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Protected$.prototype.$classData = $d_Lcom_raquo_airstream_core_Protected$;
var $n_Lcom_raquo_airstream_core_Protected$;
function $m_Lcom_raquo_airstream_core_Protected$() {
  if ((!$n_Lcom_raquo_airstream_core_Protected$)) {
    $n_Lcom_raquo_airstream_core_Protected$ = new $c_Lcom_raquo_airstream_core_Protected$()
  };
  return $n_Lcom_raquo_airstream_core_Protected$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = 0;
  this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = 0
}
$c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Signal$.prototype.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $c_Lcom_raquo_airstream_core_Signal$.prototype;
$c_Lcom_raquo_airstream_core_Signal$.prototype.nextUpdateId__I = (function() {
  if ((this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId === 2147483647)) {
    this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = 1
  } else {
    this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId = ((1 + this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId) | 0)
  };
  return this.Lcom_raquo_airstream_core_Signal$__f_lastUpdateId
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Signal$: 0
}, false, "com.raquo.airstream.core.Signal$", {
  Lcom_raquo_airstream_core_Signal$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Signal$.prototype.$classData = $d_Lcom_raquo_airstream_core_Signal$;
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$()
  };
  return $n_Lcom_raquo_airstream_core_Signal$
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$code = null;
  this.Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$maybePendingObservables = null;
  this.Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$code = code;
  this.Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$maybePendingObservables = (void 0);
  $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().add__Lcom_raquo_airstream_core_Transaction__V(this)
}
$c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $c_Lcom_raquo_airstream_core_Transaction.prototype;
function $as_Lcom_raquo_airstream_core_Transaction(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_Transaction) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.Transaction"))
}
function $isArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_Transaction)))
}
function $asArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_Transaction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.Transaction;", depth))
}
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Transaction: 0
}, false, "com.raquo.airstream.core.Transaction", {
  Lcom_raquo_airstream_core_Transaction: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Transaction.prototype.$classData = $d_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.Lcom_raquo_airstream_core_Transaction$__f_com$raquo$airstream$core$Transaction$$throwDeadTrxError = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.Lcom_raquo_airstream_core_Transaction$__f_com$raquo$airstream$core$Transaction$$throwDeadTrxError = new $c_sjsr_AnonFunction1(((trx$2) => {
    var trx = $as_Lcom_raquo_airstream_core_Transaction(trx$2);
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."))
  }))
}
$c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $c_Lcom_raquo_airstream_core_Transaction$.prototype;
$c_Lcom_raquo_airstream_core_Transaction$.prototype.com$raquo$airstream$core$Transaction$$run__Lcom_raquo_airstream_core_Transaction__V = (function(transaction) {
  try {
    $n($n(transaction).Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$code).apply__O__O(transaction);
    var this$1 = $n(transaction);
    var value = this$1.Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$maybePendingObservables;
    if ((value !== (void 0))) {
      var pendingObservables = $as_Lcom_raquo_airstream_util_JsPriorityQueue(value);
      while ($n(pendingObservables).nonEmpty__Z()) {
        $n($as_Lcom_raquo_airstream_core_SyncObservable($n(pendingObservables).dequeue__O())).syncFire__Lcom_raquo_airstream_core_Transaction__V(this$1)
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(e$2)
  } finally {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().done__Lcom_raquo_airstream_core_Transaction__V(transaction)
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Transaction$: 0
}, false, "com.raquo.airstream.core.Transaction$", {
  Lcom_raquo_airstream_core_Transaction$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Transaction$.prototype.$classData = $d_Lcom_raquo_airstream_core_Transaction$;
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$()
  };
  return $n_Lcom_raquo_airstream_core_Transaction$
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if (($uI($thiz.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks.length) > 0)) {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((trx$2) => {
      var trx = $as_Lcom_raquo_airstream_core_Transaction(trx$2);
      while (($uI($m_Lcom_raquo_airstream_core_Transaction$onStart$().Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks.length) > 0)) {
        var callback = $as_F1($m_Lcom_raquo_airstream_core_Transaction$onStart$().Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks.pop());
        try {
          $n(callback).apply__O__O(trx)
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(e$2)
        }
      }
    })))
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = 0;
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = 0;
  this.Lcom_raquo_airstream_core_Transaction$onStart$__f_pendingCallbacks = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$())
}
$c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Transaction$onStart$: 0
}, false, "com.raquo.airstream.core.Transaction$onStart$", {
  Lcom_raquo_airstream_core_Transaction$onStart$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype.$classData = $d_Lcom_raquo_airstream_core_Transaction$onStart$;
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$()
  };
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__sjs_js_$bar($thiz, transaction) {
  return $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.get(transaction)
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack.unshift(transaction)
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__sjs_js_$bar($thiz) {
  var a = $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack.shift();
  return a
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__sjs_js_$bar($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$()) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.set(parent, newChildren)
  }
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__sjs_js_$bar($thiz, parent) {
  var maybeParentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__sjs_js_$bar($thiz, parent);
  var value = (((maybeParentChildren === (void 0)) || ($uI(maybeParentChildren.length) > 0)) ? maybeParentChildren : (void 0));
  if ((value === (void 0))) {
    return (void 0)
  } else {
    var nextChild = $as_Lcom_raquo_airstream_core_Transaction(value.shift());
    if (($uI(value.length) === 0)) {
      $uZ($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.delete(parent))
    };
    return nextChild
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack = null;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$());
  this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children = new Map()
}
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype;
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.add__Lcom_raquo_airstream_core_Transaction__V = (function(newTransaction) {
  var value = this.peekStack__sjs_js_$bar();
  if ((value === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$(), newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().com$raquo$airstream$core$Transaction$$run__Lcom_raquo_airstream_core_Transaction__V(newTransaction)
  } else {
    var currentTransaction = $as_Lcom_raquo_airstream_core_Transaction(value);
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$(), currentTransaction, newTransaction)
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.done__Lcom_raquo_airstream_core_Transaction__V = (function(transaction) {
  var value = this.peekStack__sjs_js_$bar();
  if ((!((value !== (void 0)) && $m_sr_BoxesRunTime$().equals__O__O__Z(transaction, value)))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.")
  };
  this.putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V(transaction);
  $n(transaction).Lcom_raquo_airstream_core_Transaction__f_com$raquo$airstream$core$Transaction$$code = $m_Lcom_raquo_airstream_core_Transaction$().Lcom_raquo_airstream_core_Transaction$__f_com$raquo$airstream$core$Transaction$$throwDeadTrxError;
  var value$1 = this.peekStack__sjs_js_$bar();
  if ((value$1 === (void 0))) {
    if (($uI($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.size) > 0)) {
      var numChildren = new $c_sr_IntRef(0);
      $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.forEach(((arg1$2, arg2$2) => {
        var arg2 = $as_Lcom_raquo_airstream_core_Transaction(arg2$2);
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().com$raquo$airstream$core$Transaction$pendingTransactions$$$anonfun$done$2__Lcom_raquo_ew_JsArray__Lcom_raquo_airstream_core_Transaction__sr_IntRef__V(arg1$2, arg2, numChildren)
      }));
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.sr_IntRef__f_elem) + " children for ") + $uI($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_children.size)) + " transactions remain. This is a bug in Airstream."))
    }
  } else {
    var nextTransaction = $as_Lcom_raquo_airstream_core_Transaction(value$1);
    $m_Lcom_raquo_airstream_core_Transaction$().com$raquo$airstream$core$Transaction$$run__Lcom_raquo_airstream_core_Transaction__V(nextTransaction)
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V = (function(doneTransaction) {
  var value = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__sjs_js_$bar(this, doneTransaction);
  if ((value === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__sjs_js_$bar($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$());
    var value$1 = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().peekStack__sjs_js_$bar();
    if ((value$1 !== (void 0))) {
      var parentTransaction = $as_Lcom_raquo_airstream_core_Transaction(value$1);
      $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().putNextTransactionOnStack__Lcom_raquo_airstream_core_Transaction__V(parentTransaction)
    }
  } else {
    var nextChild = $as_Lcom_raquo_airstream_core_Transaction(value);
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$(), nextChild)
  }
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.peekStack__sjs_js_$bar = (function() {
  var a = this.Lcom_raquo_airstream_core_Transaction$pendingTransactions$__f_stack[0];
  return a
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.com$raquo$airstream$core$Transaction$pendingTransactions$$$anonfun$done$2__Lcom_raquo_ew_JsArray__Lcom_raquo_airstream_core_Transaction__sr_IntRef__V = (function(transactions, x$2, numChildren$1) {
  $n(numChildren$1).sr_IntRef__f_elem = (($n(numChildren$1).sr_IntRef__f_elem + $uI(transactions.length)) | 0)
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Transaction$pendingTransactions$: 0
}, false, "com.raquo.airstream.core.Transaction$pendingTransactions$", {
  Lcom_raquo_airstream_core_Transaction$pendingTransactions$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype.$classData = $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$()
  };
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = $uI($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.indexOf(subscription));
  if ((index !== (-1))) {
    $thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.splice(index, 1);
    var this$1 = $n($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
    if ((!this$1.isEmpty__Z())) {
      $n(subscription).onDeactivate__V()
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?")
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while (($uI($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals.length) > 0)) {
    var subscriptionToRemove = $as_Lcom_raquo_airstream_ownership_DynamicSubscription($thiz.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals.shift());
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscriptionToRemove)
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = false;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner = null;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled = onAccessAfterKilled;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$());
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = true;
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$());
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner = $m_s_None$();
  this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0
}
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.activate__V = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
  if ((!(!this$1.isEmpty__Z()))) {
    var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    try {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_onAccessAfterKilled);
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner = new $c_s_Some(newOwner);
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = false;
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0;
      var i = 0;
      var originalNumSubs = $uI(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.length);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs) | 0);
        var sub = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions[ix]);
        $n(sub).onActivate__Lcom_raquo_airstream_ownership_Owner__V(newOwner);
        i = ((1 + i) | 0)
      };
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = true;
      this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = 0
    } finally {
      this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
      if ((this$2.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2)
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"))
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.deactivate__V = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
  if ((!this$1.isEmpty__Z())) {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = false;
    var arr = this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions;
    var i = 0;
    var len = $uI(arr.length);
    while ((i < len)) {
      var arg1$2 = arr[i];
      var arg1 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1$2);
      $n(arg1).onDeactivate__V();
      i = ((1 + i) | 0)
    };
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
    if ((!this$4.isEmpty__Z())) {
      var arg1$1 = this$4.get__O();
      var x$2 = $as_Lcom_raquo_airstream_ownership_Owner(arg1$1);
      var this$5 = $n(x$2);
      this$5.killSubscriptions__V()
    };
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription = true;
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner = $m_s_None$()
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active")
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.addSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__Z__V = (function(subscription, prepend) {
  if (prepend) {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs = ((1 + this.Lcom_raquo_airstream_ownership_DynamicOwner__f_numPrependedSubs) | 0);
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.unshift(subscription)
  } else {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$subscriptions.push(subscription)
  };
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var o = $as_Lcom_raquo_airstream_ownership_Owner(arg1);
    $n(subscription).onActivate__Lcom_raquo_airstream_ownership_Owner__V(o)
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.removeSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__V = (function(subscription) {
  if (this.Lcom_raquo_airstream_ownership_DynamicOwner__f_isSafeToRemoveSubscription) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription)
  } else {
    this.Lcom_raquo_airstream_ownership_DynamicOwner__f_pendingSubscriptionRemovals.push(subscription)
  }
});
function $as_Lcom_raquo_airstream_ownership_DynamicOwner(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_ownership_DynamicOwner) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.DynamicOwner"))
}
function $isArrayOf_Lcom_raquo_airstream_ownership_DynamicOwner(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_DynamicOwner)))
}
function $asArrayOf_Lcom_raquo_airstream_ownership_DynamicOwner(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_DynamicOwner(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.DynamicOwner;", depth))
}
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_DynamicOwner: 0
}, false, "com.raquo.airstream.ownership.DynamicOwner", {
  Lcom_raquo_airstream_ownership_DynamicOwner: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype.$classData = $d_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = null;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner = dynamicOwner;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate = activate;
  this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $m_s_None$();
  $n(dynamicOwner).addSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__Z__V(this, prepend)
}
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.kill__V = (function() {
  $n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner).removeSubscription__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this)
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.onActivate__Lcom_raquo_airstream_ownership_Owner__V = (function(owner) {
  var this$1 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
  try {
    this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $as_s_Option($n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_activate).apply__O__O(owner))
  } finally {
    this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    if ((this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$1)
    }
  }
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.onDeactivate__V = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var currentSubscription = $as_Lcom_raquo_airstream_ownership_Subscription(arg1);
    $n(currentSubscription).kill__V();
    this.Lcom_raquo_airstream_ownership_DynamicSubscription__f_maybeCurrentSubscription = $m_s_None$()
  }
});
function $as_Lcom_raquo_airstream_ownership_DynamicSubscription(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_ownership_DynamicSubscription) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.DynamicSubscription"))
}
function $isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_DynamicSubscription)))
}
function $asArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_DynamicSubscription(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.DynamicSubscription;", depth))
}
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_DynamicSubscription: 0
}, false, "com.raquo.airstream.ownership.DynamicSubscription", {
  Lcom_raquo_airstream_ownership_DynamicSubscription: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype.$classData = $d_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype;
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    return new $c_s_Some($n(activate).apply__O__O(owner))
  })), prepend)
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    $n(activate).apply__O__O(owner);
    return $m_s_None$()
  })), prepend)
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_DynamicSubscription$: 0
}, false, "com.raquo.airstream.ownership.DynamicSubscription$", {
  Lcom_raquo_airstream_ownership_DynamicSubscription$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype.$classData = $d_Lcom_raquo_airstream_ownership_DynamicSubscription$;
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$()
  };
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions;
  var i = 0;
  var len = $uI(arr.length);
  while ((i < len)) {
    var arg1$2 = arr[i];
    var arg1 = $as_Lcom_raquo_airstream_ownership_Subscription(arg1$2);
    var this$3 = $n(arg1);
    this$3.com$raquo$airstream$ownership$Subscription$$safeCleanup__V();
    i = ((1 + i) | 0)
  };
  $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions.length = 0
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = $uI($thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions.indexOf(subscription));
  if ((index !== (-1))) {
    $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions.splice(index, 1)
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.")
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions.push(subscription)
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$())
}
function $is_Lcom_raquo_airstream_ownership_Owner(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_ownership_Owner)))
}
function $as_Lcom_raquo_airstream_ownership_Owner(obj) {
  return (($is_Lcom_raquo_airstream_ownership_Owner(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.Owner"))
}
function $isArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_Owner)))
}
function $asArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_Owner(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.Owner;", depth))
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.Lcom_raquo_airstream_ownership_Subscription__f_owner = null;
  this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup = null;
  this.Lcom_raquo_airstream_ownership_Subscription__f__isKilled = false;
  this.Lcom_raquo_airstream_ownership_Subscription__f_owner = owner;
  this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup = cleanup;
  this.Lcom_raquo_airstream_ownership_Subscription__f__isKilled = false;
  $n(owner).own__Lcom_raquo_airstream_ownership_Subscription__V(this)
}
$c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $c_Lcom_raquo_airstream_ownership_Subscription.prototype;
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.kill__V = (function() {
  this.com$raquo$airstream$ownership$Subscription$$safeCleanup__V();
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_Subscription__f_owner);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this$1, this)
});
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.com$raquo$airstream$ownership$Subscription$$safeCleanup__V = (function() {
  if ((!this.Lcom_raquo_airstream_ownership_Subscription__f__isKilled)) {
    var this$1 = $n(this.Lcom_raquo_airstream_ownership_Subscription__f_cleanup);
    this$1.apply__O();
    this.Lcom_raquo_airstream_ownership_Subscription__f__isKilled = true
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.")
  }
});
function $as_Lcom_raquo_airstream_ownership_Subscription(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_ownership_Subscription) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.ownership.Subscription"))
}
function $isArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_ownership_Subscription)))
}
function $asArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_ownership_Subscription(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.ownership.Subscription;", depth))
}
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_Subscription: 0
}, false, "com.raquo.airstream.ownership.Subscription", {
  Lcom_raquo_airstream_ownership_Subscription: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_Subscription.prototype.$classData = $d_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = null;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate = activate;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate = deactivate;
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = $m_s_None$();
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false
}
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype;
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.isCurrentOwnerActive__Z = (function() {
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var x$1 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    var this$2 = $n(x$1);
    var this$3 = $n(this$2.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner);
    var this$4 = $n(this$3.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
    return (!this$4.isEmpty__Z())
  } else {
    return false
  }
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.setOwner__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(nextOwner) {
  if (this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.")
  };
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var x$2 = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    var this$2 = $n(x$2);
    var x$2$1 = this$2.Lcom_raquo_airstream_ownership_DynamicSubscription__f_com$raquo$airstream$ownership$DynamicSubscription$$dynamicOwner;
    if ((nextOwner === null)) {
      var $x_1 = (x$2$1 === null)
    } else {
      var this$3 = $n(nextOwner);
      var $x_1 = (this$3 === x$2$1)
    }
  } else {
    var $x_1 = false
  };
  if ((!$x_1)) {
    if (this.isCurrentOwnerActive__Z()) {
      var this$4 = $n(nextOwner);
      var this$5 = $n(this$4.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
      var $x_2 = (!this$5.isEmpty__Z())
    } else {
      var $x_2 = false
    };
    if ($x_2) {
      this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = true
    };
    var this$6 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
    if ((!this$6.isEmpty__Z())) {
      var arg1$1 = this$6.get__O();
      var subscription = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1$1);
      $n(subscription).kill__V();
      this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = $m_s_None$()
    };
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription(nextOwner, new $c_sjsr_AnonFunction1(((parentOwner$2) => {
      var parentOwner = $as_Lcom_raquo_airstream_ownership_Owner(parentOwner$2);
      if ((!this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress)) {
        var this$7 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_activate);
        this$7.apply__O()
      };
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0((() => {
        if ((!this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress)) {
          var this$8 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_deactivate);
          this$8.apply__O()
        }
      })))
    })), false);
    this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = new $c_s_Some(newPilotSubscription);
    this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress = false
  }
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.clearOwner__V = (function() {
  if (this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_isLiveTransferInProgress) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.")
  };
  var this$1 = $n(this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var subscription = $as_Lcom_raquo_airstream_ownership_DynamicSubscription(arg1);
    $n(subscription).kill__V()
  };
  this.Lcom_raquo_airstream_ownership_TransferableSubscription__f_maybeSubscription = $m_s_None$()
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_TransferableSubscription: 0
}, false, "com.raquo.airstream.ownership.TransferableSubscription", {
  Lcom_raquo_airstream_ownership_TransferableSubscription: 1,
  O: 1
});
$c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype.$classData = $d_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
  /*<skip>*/
}
$c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_Var$.prototype.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_state_Var$.prototype = $c_Lcom_raquo_airstream_state_Var$.prototype;
$c_Lcom_raquo_airstream_state_Var$.prototype.apply__O__Lcom_raquo_airstream_state_Var = (function(initial) {
  var initial$1 = new $c_s_util_Success(initial);
  return new $c_Lcom_raquo_airstream_state_SourceVar(initial$1)
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().initClass({
  Lcom_raquo_airstream_state_Var$: 0
}, false, "com.raquo.airstream.state.Var$", {
  Lcom_raquo_airstream_state_Var$: 1,
  O: 1
});
$c_Lcom_raquo_airstream_state_Var$.prototype.$classData = $d_Lcom_raquo_airstream_state_Var$;
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$()
  };
  return $n_Lcom_raquo_airstream_state_Var$
}
function $as_Lcom_raquo_airstream_util_JsPriorityQueue(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.util.JsPriorityQueue"))
}
function $isArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_util_JsPriorityQueue)))
}
function $asArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_util_JsPriorityQueue(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.util.JsPriorityQueue;", depth))
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$() {
  /*<skip>*/
}
$c_Lcom_raquo_ew_JsArray$.prototype = new $h_O();
$c_Lcom_raquo_ew_JsArray$.prototype.constructor = $c_Lcom_raquo_ew_JsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$() {
  /*<skip>*/
}
$h_Lcom_raquo_ew_JsArray$.prototype = $c_Lcom_raquo_ew_JsArray$.prototype;
$c_Lcom_raquo_ew_JsArray$.prototype.apply__sci_Seq__Lcom_raquo_ew_JsArray = (function(items) {
  return [...$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(items)]
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().initClass({
  Lcom_raquo_ew_JsArray$: 0
}, false, "com.raquo.ew.JsArray$", {
  Lcom_raquo_ew_JsArray$: 1,
  O: 1
});
$c_Lcom_raquo_ew_JsArray$.prototype.$classData = $d_Lcom_raquo_ew_JsArray$;
var $n_Lcom_raquo_ew_JsArray$;
function $m_Lcom_raquo_ew_JsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$)) {
    $n_Lcom_raquo_ew_JsArray$ = new $c_Lcom_raquo_ew_JsArray$()
  };
  return $n_Lcom_raquo_ew_JsArray$
}
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  this.Lcom_raquo_laminar_DomApi$__f_classNamesSeparatorRegex = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.createSvgElement__Lcom_raquo_laminar_tags_SvgTag__Lorg_scalajs_dom_SVGElement($n($n($m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).svg__Lcom_raquo_laminar_api_Laminar$svg$()).svg__Lcom_raquo_laminar_tags_SvgTag());
  this.Lcom_raquo_laminar_DomApi$__f_classNamesSeparatorRegex = new RegExp(" ", "g")
}
$c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$c_Lcom_raquo_laminar_DomApi$.prototype.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $c_Lcom_raquo_laminar_DomApi$.prototype;
$c_Lcom_raquo_laminar_DomApi$.prototype.appendChild__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((e$2 instanceof $c_sjs_js_JavaScriptException)) {
      var x7 = $as_sjs_js_JavaScriptException(e$2);
      if ($uZ(($n(x7).sjs_js_JavaScriptException__f_exception instanceof DOMException))) {
        return false
      }
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeChild__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((e$2 instanceof $c_sjs_js_JavaScriptException)) {
      var x7 = $as_sjs_js_JavaScriptException(e$2);
      if ($uZ(($n(x7).sjs_js_JavaScriptException__f_exception instanceof DOMException))) {
        return false
      }
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.insertBefore__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((e$2 instanceof $c_sjs_js_JavaScriptException)) {
      var x7 = $as_sjs_js_JavaScriptException(e$2);
      if ($uZ(($n(x7).sjs_js_JavaScriptException__f_exception instanceof DOMException))) {
        return false
      }
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.insertAfter__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((e$2 instanceof $c_sjs_js_JavaScriptException)) {
      var x7 = $as_sjs_js_JavaScriptException(e$2);
      if ($uZ(($n(x7).sjs_js_JavaScriptException__f_exception instanceof DOMException))) {
        return false
      }
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.replaceChild__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((e$2 instanceof $c_sjs_js_JavaScriptException)) {
      var x7 = $as_sjs_js_JavaScriptException(e$2);
      if ($uZ(($n(x7).sjs_js_JavaScriptException__f_exception instanceof DOMException))) {
        return false
      }
    };
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.isDescendantOf__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z = (function(node, ancestor) {
  while (true) {
    if ((node.parentNode !== null)) {
      var effectiveParentNode = node.parentNode
    } else {
      var maybeShadowHost = node.host;
      var this$2 = $m_s_$less$colon$less$();
      var ev = this$2.s_$less$colon$less$__f_singleton;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? ($n(ev), null) : maybeShadowHost)
    };
    if ((effectiveParentNode !== null)) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(ancestor, effectiveParentNode)) {
        return true
      } else {
        node = effectiveParentNode
      }
    } else {
      return false
    }
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.addEventListener__Lorg_scalajs_dom_Element__Lcom_raquo_laminar_modifiers_EventListener__V = (function(element, listener) {
  var prop = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  element.addEventListener($n($n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_eventProp).Lcom_raquo_laminar_keys_EventProp__f_name, $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_domCallback, $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_options)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeEventListener__Lorg_scalajs_dom_Element__Lcom_raquo_laminar_modifiers_EventListener__V = (function(element, listener) {
  var prop = $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  element.removeEventListener($n($n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_eventProp).Lcom_raquo_laminar_keys_EventProp__f_name, $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_domCallback, $n(listener).Lcom_raquo_laminar_modifiers_EventListener__f_options)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createHtmlElement__Lcom_raquo_laminar_tags_HtmlTag__Lorg_scalajs_dom_HTMLElement = (function(tag) {
  return document.createElement($n(tag).Lcom_raquo_laminar_tags_HtmlTag__f_name)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__sjs_js_$bar = (function(element, attr) {
  var value = this.getHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__sjs_js_$bar(element, attr);
  if ((value === (void 0))) {
    return (void 0)
  } else {
    var domValue = $as_T(value);
    var a = $n($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_codec).decode__O__O(domValue);
    return a
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__sjs_js_$bar = (function(element, attr) {
  var domValue = $as_T($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.getAttributeNS(null, $n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_name));
  return ((domValue !== null) ? domValue : (void 0))
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O__V = (function(element, attr, value) {
  var domValue = $as_T($n($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_codec).encode__O__O(value));
  this.setHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__T__V(element, attr, domValue)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setHtmlAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__T__V = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.removeHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__V(element, attr)
  } else {
    $n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.setAttribute($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_name, domValue)
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__V = (function(element, attr) {
  $n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.removeAttribute($n(attr).Lcom_raquo_laminar_keys_HtmlAttr__f_name)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setHtmlProperty__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlProp__O__V = (function(element, prop, value) {
  var domValue = $n($n(prop).Lcom_raquo_laminar_keys_HtmlProp__f_codec).encode__O__O(value);
  this.setHtmlPropertyRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlProp__O__V(element, prop, domValue)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setHtmlPropertyRaw__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlProp__O__V = (function(element, prop, value) {
  $n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref[$n(prop).Lcom_raquo_laminar_keys_HtmlProp__f_name] = value
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createSvgElement__Lcom_raquo_laminar_tags_SvgTag__Lorg_scalajs_dom_SVGElement = (function(tag) {
  return document.createElementNS($m_Lcom_raquo_laminar_keys_SvgAttr$().Lcom_raquo_laminar_keys_SvgAttr$__f_svgNamespaceUri, $n(tag).Lcom_raquo_laminar_tags_SvgTag__f_name)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__sjs_js_$bar = (function(element, attr) {
  var value = this.getSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__sjs_js_$bar(element, attr);
  if ((value === (void 0))) {
    return (void 0)
  } else {
    var domValue = $as_T(value);
    var a = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_codec).decode__O__O(domValue);
    return a
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__sjs_js_$bar = (function(element, attr) {
  var $x_2 = $n(element).ref__Lorg_scalajs_dom_SVGElement();
  var this$2 = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri);
  var this$1 = $m_s_$less$colon$less$();
  var ev = this$1.s_$less$colon$less$__f_singleton;
  var $x_1 = $x_2.getAttributeNS($as_T((this$2.isEmpty__Z() ? ($n(ev), null) : this$2.get__O())), $n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_localName);
  var domValue = $as_T($x_1);
  return ((domValue !== null) ? domValue : (void 0))
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O__V = (function(element, attr, value) {
  var domValue = $as_T($n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_codec).encode__O__O(value));
  this.setSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__T__V(element, attr, domValue)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.setSvgAttributeRaw__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__T__V = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.removeSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__V(element, attr)
  } else {
    var this$1 = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri);
    if (this$1.isEmpty__Z()) {
      $n(element).ref__Lorg_scalajs_dom_SVGElement().setAttribute($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_name, domValue)
    } else {
      var arg1 = this$1.get__O();
      var namespaceUri = $as_T(arg1);
      $n(element).ref__Lorg_scalajs_dom_SVGElement().setAttributeNS(namespaceUri, $n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_name, domValue)
    }
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.removeSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__V = (function(element, attr) {
  var $x_1 = $n(element).ref__Lorg_scalajs_dom_SVGElement();
  var this$2 = $n($n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri);
  var this$1 = $m_s_$less$colon$less$();
  var ev = this$1.s_$less$colon$less$__f_singleton;
  $x_1.removeAttributeNS($as_T((this$2.isEmpty__Z() ? ($n(ev), null) : this$2.get__O())), $n(attr).Lcom_raquo_laminar_keys_SvgAttr__f_localName)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createCommentNode__T__Lorg_scalajs_dom_Comment = (function(text) {
  return document.createComment(text)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.createTextNode__T__Lorg_scalajs_dom_Text = (function(text) {
  return document.createTextNode(text)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.isCustomElement__Lorg_scalajs_dom_Element__Z = (function(element) {
  var $x_1 = $m_sc_StringOps$();
  var x = $as_T(element.tagName);
  return $n($x_1).contains$extension__T__C__Z(x, 45)
});
$c_Lcom_raquo_laminar_DomApi$.prototype.getValue__Lorg_scalajs_dom_Element__sjs_js_$bar = (function(element) {
  if ($uZ((element instanceof HTMLInputElement))) {
    var a = $as_T(element.value);
    return a
  } else if ($uZ((element instanceof HTMLTextAreaElement))) {
    var a$1 = $as_T(element.value);
    return a$1
  } else if ($uZ((element instanceof HTMLSelectElement))) {
    var a$2 = $as_T(element.value);
    return a$2
  } else if ($uZ((element instanceof HTMLButtonElement))) {
    var a$3 = $as_T(element.value);
    return a$3
  } else if ($uZ((element instanceof HTMLOptionElement))) {
    var a$4 = $as_T(element.value);
    return a$4
  } else if (this.isCustomElement__Lorg_scalajs_dom_Element__Z(element)) {
    var value = element.value;
    new $c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1();
    if ((value === (void 0))) {
      return (void 0)
    } else if (((typeof value) === "string")) {
      var x2 = $as_T(value);
      return x2
    } else {
      return (void 0)
    }
  } else {
    return (void 0)
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugPath__Lorg_scalajs_dom_Node__sci_List__sci_List = (function(element, initial) {
  while (true) {
    var x1 = element;
    if ((x1 === null)) {
      return initial
    } else {
      var temp$element = element.parentNode;
      var rassoc$2 = this.debugNodeDescription__Lorg_scalajs_dom_Node__T(element);
      var this$1 = $n(initial);
      var temp$initial = new $c_sci_$colon$colon(rassoc$2, this$1);
      element = temp$element;
      initial = temp$initial
    }
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugNodeDescription__Lorg_scalajs_dom_Node__T = (function(node) {
  if ($uZ((node instanceof HTMLElement))) {
    var id = $as_T(node.id);
    $m_sc_StringOps$();
    var this$3 = $n(id);
    if ((!(this$3 === ""))) {
      var suffixStr = ("#" + id)
    } else {
      var classes = $as_T(node.className);
      $m_sc_StringOps$();
      var this$6 = $n(classes);
      if ((!(this$6 === ""))) {
        var a = this.Lcom_raquo_laminar_DomApi$__f_classNamesSeparatorRegex;
        var self = classes.replace(a, ".");
        var suffixStr = ("." + $as_T(self))
      } else {
        var suffixStr = ""
      }
    };
    var str = $as_T(node.tagName);
    var self$1 = str.toLowerCase();
    return ($as_T(self$1) + suffixStr)
  } else {
    return $as_T(node.nodeName)
  }
});
$c_Lcom_raquo_laminar_DomApi$.prototype.debugNodeOuterHtml__Lorg_scalajs_dom_Node__T = (function(node) {
  return ($uZ((node instanceof Element)) ? $as_T(node.outerHTML) : ($uZ((node instanceof Text)) ? (("Text(" + $as_T(node.textContent)) + ")") : ($uZ((node instanceof Comment)) ? (("Comment(" + $as_T(node.textContent)) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T($n(node))) + ")")))))
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().initClass({
  Lcom_raquo_laminar_DomApi$: 0
}, false, "com.raquo.laminar.DomApi$", {
  Lcom_raquo_laminar_DomApi$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_DomApi$.prototype.$classData = $d_Lcom_raquo_laminar_DomApi$;
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$()
  };
  return $n_Lcom_raquo_laminar_DomApi$
}
function $f_Lcom_raquo_laminar_api_Airstream__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$();
  $m_Lcom_raquo_airstream_core_AirstreamError$();
  $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_Var = $m_Lcom_raquo_airstream_state_Var$()
}
function $p_Lcom_raquo_laminar_codecs_package$__IntAsStringCodec$lzycompute__Lcom_raquo_laminar_codecs_Codec($thiz) {
  if (((((1 & $thiz.Lcom_raquo_laminar_codecs_package$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.Lcom_raquo_laminar_codecs_package$__f_IntAsStringCodec = new $c_Lcom_raquo_laminar_codecs_package$$anon$2();
    $thiz.Lcom_raquo_laminar_codecs_package$__f_bitmap$0 = (((1 | $thiz.Lcom_raquo_laminar_codecs_package$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.Lcom_raquo_laminar_codecs_package$__f_IntAsStringCodec
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.Lcom_raquo_laminar_codecs_package$__f_IntAsStringCodec = null;
  this.Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec = null;
  this.Lcom_raquo_laminar_codecs_package$__f_bitmap$0 = 0;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec = new $c_Lcom_raquo_laminar_codecs_package$$anon$1();
  new $c_Lcom_raquo_laminar_codecs_package$$anon$1();
  new $c_Lcom_raquo_laminar_codecs_package$$anon$1();
  new $c_Lcom_raquo_laminar_codecs_package$$anon$4()
}
$c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$c_Lcom_raquo_laminar_codecs_package$.prototype.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $c_Lcom_raquo_laminar_codecs_package$.prototype;
$c_Lcom_raquo_laminar_codecs_package$.prototype.IntAsStringCodec__Lcom_raquo_laminar_codecs_Codec = (function() {
  return (((((1 & this.Lcom_raquo_laminar_codecs_package$__f_bitmap$0) << 24) >> 24) === 0) ? $p_Lcom_raquo_laminar_codecs_package$__IntAsStringCodec$lzycompute__Lcom_raquo_laminar_codecs_Codec(this) : this.Lcom_raquo_laminar_codecs_package$__f_IntAsStringCodec)
});
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().initClass({
  Lcom_raquo_laminar_codecs_package$: 0
}, false, "com.raquo.laminar.codecs.package$", {
  Lcom_raquo_laminar_codecs_package$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_codecs_package$.prototype.$classData = $d_Lcom_raquo_laminar_codecs_package$;
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$()
  };
  return $n_Lcom_raquo_laminar_codecs_package$
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.Lcom_raquo_laminar_keys_HtmlAttr__f_name, new $c_sjsr_AnonFunction1(((el$2) => {
    var el = $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(el$2);
    var value = $m_Lcom_raquo_laminar_DomApi$().getHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__sjs_js_$bar(el, attr);
    return $as_T(((value === (void 0)) ? "" : value))
  })), new $c_sjsr_AnonFunction2(((el$3$2, value$2) => {
    var el$3 = $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(el$3$2);
    var value$1 = $as_T(value$2);
    $m_Lcom_raquo_laminar_DomApi$().setHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O__V(el$3, attr, value$1)
  })), separator)
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_className = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ")
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.Lcom_raquo_laminar_keys_SvgAttr__f_name, new $c_sjsr_AnonFunction1(((el$2) => {
    var el = $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement(el$2);
    var value = $m_Lcom_raquo_laminar_DomApi$().getSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__sjs_js_$bar(el, attr);
    return $as_T(((value === (void 0)) ? "" : value))
  })), new $c_sjsr_AnonFunction2(((el$3$2, value$2) => {
    var el$3 = $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement(el$3$2);
    var value$1 = $as_T(value$2);
    $m_Lcom_raquo_laminar_DomApi$().setSvgAttribute__Lcom_raquo_laminar_nodes_ReactiveSvgElement__Lcom_raquo_laminar_keys_SvgAttr__O__V(el$3, attr, value$1)
  })), separator)
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.Lcom_raquo_laminar_api_Laminar$svg$__f_className = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ")
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_keys_CompositeKey$.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_CompositeKey$.prototype.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_CompositeKey$.prototype = $c_Lcom_raquo_laminar_keys_CompositeKey$.prototype;
$c_Lcom_raquo_laminar_keys_CompositeKey$.prototype.normalize__T__T__sci_List = (function(items, separator) {
  var this$1 = $n(items);
  if ((this$1 === "")) {
    return $m_s_package$().s_package$__f_Nil
  } else {
    var arr = items.split(separator);
    var arr$1 = arr.filter(((arg1$2) => {
      var arg1 = $as_T(arg1$2);
      return $m_Lcom_raquo_laminar_keys_CompositeKey$().com$raquo$laminar$keys$CompositeKey$$$anonfun$normalize$1__T__Z(arg1)
    }));
    var this$9 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr$1);
    $m_sci_List$();
    return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$9)
  }
});
$c_Lcom_raquo_laminar_keys_CompositeKey$.prototype.com$raquo$laminar$keys$CompositeKey$$$anonfun$normalize$1__T__Z = (function(x$1) {
  $m_sc_StringOps$();
  var this$3 = $n(x$1);
  return (!(this$3 === ""))
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_CompositeKey$: 0
}, false, "com.raquo.laminar.keys.CompositeKey$", {
  Lcom_raquo_laminar_keys_CompositeKey$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_CompositeKey$.prototype.$classData = $d_Lcom_raquo_laminar_keys_CompositeKey$;
var $n_Lcom_raquo_laminar_keys_CompositeKey$;
function $m_Lcom_raquo_laminar_keys_CompositeKey$() {
  if ((!$n_Lcom_raquo_laminar_keys_CompositeKey$)) {
    $n_Lcom_raquo_laminar_keys_CompositeKey$ = new $c_Lcom_raquo_laminar_keys_CompositeKey$()
  };
  return $n_Lcom_raquo_laminar_keys_CompositeKey$
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, processor) {
  this.Lcom_raquo_laminar_keys_EventProcessor__f_eventProp = null;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture = false;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldBePassive = false;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_processor = null;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_eventProp = eventProp;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture = shouldUseCapture;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldBePassive = shouldBePassive;
  this.Lcom_raquo_laminar_keys_EventProcessor__f_processor = processor
}
$c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_EventProcessor.prototype.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype;
$c_Lcom_raquo_laminar_keys_EventProcessor.prototype.mapToValue__Lcom_raquo_laminar_keys_EventProcessor = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1(((ev$2) => {
    var this$2 = $n($as_s_Option($n(this.Lcom_raquo_laminar_keys_EventProcessor__f_processor).apply__O__O(ev$2)));
    if (this$2.isEmpty__Z()) {
      return $m_s_None$()
    } else {
      this$2.get__O();
      var value = $m_Lcom_raquo_laminar_DomApi$().getValue__Lorg_scalajs_dom_Element__sjs_js_$bar(ev$2.target);
      return new $c_s_Some($as_T(((value === (void 0)) ? "" : value)))
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.Lcom_raquo_laminar_keys_EventProcessor__f_eventProp, this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture, this.Lcom_raquo_laminar_keys_EventProcessor__f_shouldBePassive, newProcessor)
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_EventProcessor: 0
}, false, "com.raquo.laminar.keys.EventProcessor", {
  Lcom_raquo_laminar_keys_EventProcessor: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_EventProcessor.prototype.$classData = $d_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_keys_EventProcessor$.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_EventProcessor$.prototype.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_EventProcessor$.prototype = $c_Lcom_raquo_laminar_keys_EventProcessor$.prototype;
$c_Lcom_raquo_laminar_keys_EventProcessor$.prototype.empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1(((x$10$2) => new $c_s_Some(x$10$2))))
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_EventProcessor$: 0
}, false, "com.raquo.laminar.keys.EventProcessor$", {
  Lcom_raquo_laminar_keys_EventProcessor$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_EventProcessor$.prototype.$classData = $d_Lcom_raquo_laminar_keys_EventProcessor$;
var $n_Lcom_raquo_laminar_keys_EventProcessor$;
function $m_Lcom_raquo_laminar_keys_EventProcessor$() {
  if ((!$n_Lcom_raquo_laminar_keys_EventProcessor$)) {
    $n_Lcom_raquo_laminar_keys_EventProcessor$ = new $c_Lcom_raquo_laminar_keys_EventProcessor$()
  };
  return $n_Lcom_raquo_laminar_keys_EventProcessor$
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_Key() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_keys_Key.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_Key.prototype.constructor = $c_Lcom_raquo_laminar_keys_Key;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_Key() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_Key.prototype = $c_Lcom_raquo_laminar_keys_Key.prototype;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_svgNamespaceUri = null;
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_xlinkNamespaceUri = null;
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_xmlNamespaceUri = null;
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_xmlnsNamespaceUri = null;
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_svgNamespaceUri = "http://www.w3.org/2000/svg";
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_xlinkNamespaceUri = "http://www.w3.org/1999/xlink";
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_xmlNamespaceUri = "http://www.w3.org/XML/1998/namespace";
  this.Lcom_raquo_laminar_keys_SvgAttr$__f_xmlnsNamespaceUri = "http://www.w3.org/2000/xmlns/"
}
$c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_SvgAttr$.prototype.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype;
$c_Lcom_raquo_laminar_keys_SvgAttr$.prototype.namespaceUri__T__T = (function(namespace) {
  switch (namespace) {
    case "svg": {
      return this.Lcom_raquo_laminar_keys_SvgAttr$__f_svgNamespaceUri;
      break
    }
    case "xlink": {
      return this.Lcom_raquo_laminar_keys_SvgAttr$__f_xlinkNamespaceUri;
      break
    }
    case "xml": {
      return this.Lcom_raquo_laminar_keys_SvgAttr$__f_xmlNamespaceUri;
      break
    }
    case "xmlns": {
      return this.Lcom_raquo_laminar_keys_SvgAttr$__f_xmlnsNamespaceUri;
      break
    }
    default: {
      throw new $c_s_MatchError(namespace)
    }
  }
});
var $d_Lcom_raquo_laminar_keys_SvgAttr$ = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_SvgAttr$: 0
}, false, "com.raquo.laminar.keys.SvgAttr$", {
  Lcom_raquo_laminar_keys_SvgAttr$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_SvgAttr$.prototype.$classData = $d_Lcom_raquo_laminar_keys_SvgAttr$;
var $n_Lcom_raquo_laminar_keys_SvgAttr$;
function $m_Lcom_raquo_laminar_keys_SvgAttr$() {
  if ((!$n_Lcom_raquo_laminar_keys_SvgAttr$)) {
    $n_Lcom_raquo_laminar_keys_SvgAttr$ = new $c_Lcom_raquo_laminar_keys_SvgAttr$()
  };
  return $n_Lcom_raquo_laminar_keys_SvgAttr$
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_InsertContext(parentNode, sentinelNode, strictMode, extraNodeCount, extraNodes, extraNodesMap) {
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode = false;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = 0;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = null;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode = parentNode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = sentinelNode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode = strictMode;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = extraNodeCount;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = extraNodes;
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = extraNodesMap
}
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_InsertContext() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_lifecycle_InsertContext.prototype = $c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype;
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.forceSetStrictMode__V = (function() {
  if ((this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode || (this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount !== 0))) {
    var $x_1 = $m_Lcom_raquo_laminar_DomApi$();
    var this$1 = $n(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode);
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $n($x_1).debugNodeOuterHtml__Lorg_scalajs_dom_Node__T(this$1.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref)))
  };
  if ((this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap === null)) {
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = new Map()
  };
  if ((!$uZ(($n(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode).ref__Lorg_scalajs_dom_Node() instanceof Comment)))) {
    var contentNode = this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    var $x_2 = $m_Lcom_raquo_laminar_DomApi$();
    var this$2 = $n(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode);
    $n($x_2).insertBefore__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z(this$2.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref, newSentinelNode.Lcom_raquo_laminar_nodes_CommentNode__f_ref, $n(contentNode).ref__Lorg_scalajs_dom_Node());
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode = newSentinelNode;
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = 1;
    var this$3 = $n($m_s_package$().s_package$__f_Nil);
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = new $c_sci_$colon$colon(contentNode, this$3);
    this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.set($n(contentNode).ref__Lorg_scalajs_dom_Node(), contentNode)
  };
  this.Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode = true
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.removeOldChildNodesFromDOM__Lcom_raquo_laminar_nodes_ChildNode__V = (function(after) {
  var elem = this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = $n(after).ref__Lorg_scalajs_dom_Node().nextSibling;
    if ((prevChildRef === null)) {
      elem$1 = 0
    } else {
      var maybePrevChild = this.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        elem$1 = 0
      } else if ((maybePrevChild !== (void 0))) {
        var prevChild = $as_Lcom_raquo_laminar_nodes_ChildNode(maybePrevChild);
        $m_Lcom_raquo_laminar_nodes_ParentNode$().removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(this.Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, prevChild);
        elem$1 = (((-1) + elem$1) | 0)
      }
    }
  }
});
function $as_Lcom_raquo_laminar_lifecycle_InsertContext(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_lifecycle_InsertContext) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.lifecycle.InsertContext"))
}
function $isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_lifecycle_InsertContext)))
}
function $asArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_lifecycle_InsertContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.lifecycle.InsertContext;", depth))
}
var $d_Lcom_raquo_laminar_lifecycle_InsertContext = new $TypeData().initClass({
  Lcom_raquo_laminar_lifecycle_InsertContext: 0
}, false, "com.raquo.laminar.lifecycle.InsertContext", {
  Lcom_raquo_laminar_lifecycle_InsertContext: 1,
  O: 1
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext.prototype.$classData = $d_Lcom_raquo_laminar_lifecycle_InsertContext;
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_InsertContext$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_InsertContext$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype = $c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype;
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.reserveSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_laminar_lifecycle_InsertContext = (function(parentNode, strictMode) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, sentinelNode);
  return this.unsafeMakeReservedSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__Z__Lcom_raquo_laminar_lifecycle_InsertContext(parentNode, sentinelNode, strictMode)
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.unsafeMakeReservedSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__Z__Lcom_raquo_laminar_lifecycle_InsertContext = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_lifecycle_InsertContext(parentNode, sentinelNode, strictMode, 0, $m_s_package$().s_package$__f_Nil, (strictMode ? new Map() : null))
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.nodesToMap__sci_Seq__Lcom_raquo_ew_JsMap = (function(nodes) {
  var acc = new Map();
  $n(nodes).foreach__F1__V(new $c_sjsr_AnonFunction1(((node$2) => {
    var node = $as_Lcom_raquo_laminar_nodes_ChildNode(node$2);
    return acc.set($n(node).ref__Lorg_scalajs_dom_Node(), node)
  })));
  return acc
});
var $d_Lcom_raquo_laminar_lifecycle_InsertContext$ = new $TypeData().initClass({
  Lcom_raquo_laminar_lifecycle_InsertContext$: 0
}, false, "com.raquo.laminar.lifecycle.InsertContext$", {
  Lcom_raquo_laminar_lifecycle_InsertContext$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_lifecycle_InsertContext$.prototype.$classData = $d_Lcom_raquo_laminar_lifecycle_InsertContext$;
var $n_Lcom_raquo_laminar_lifecycle_InsertContext$;
function $m_Lcom_raquo_laminar_lifecycle_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_lifecycle_InsertContext$)) {
    $n_Lcom_raquo_laminar_lifecycle_InsertContext$ = new $c_Lcom_raquo_laminar_lifecycle_InsertContext$()
  };
  return $n_Lcom_raquo_laminar_lifecycle_InsertContext$
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode = null;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_owner = null;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode = thisNode;
  this.Lcom_raquo_laminar_lifecycle_MountContext__f_owner = owner
}
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype;
function $as_Lcom_raquo_laminar_lifecycle_MountContext(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_lifecycle_MountContext) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.lifecycle.MountContext"))
}
function $isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_lifecycle_MountContext)))
}
function $asArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_lifecycle_MountContext(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.lifecycle.MountContext;", depth))
}
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().initClass({
  Lcom_raquo_laminar_lifecycle_MountContext: 0
}, false, "com.raquo.laminar.lifecycle.MountContext", {
  Lcom_raquo_laminar_lifecycle_MountContext: 1,
  O: 1
});
$c_Lcom_raquo_laminar_lifecycle_MountContext.prototype.$classData = $d_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_ChildInserter$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_ChildInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_ChildInserter$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype = $c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype;
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__Lcom_raquo_laminar_modifiers_Inserter = (function(childSource, renderable) {
  var x$2 = new $c_sjsr_AnonFunction2(((ctx$2, owner$2) => {
    var ctx = $as_Lcom_raquo_laminar_lifecycle_InsertContext(ctx$2);
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    if ((!$n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode)) {
      $n(ctx).forceSetStrictMode__V()
    };
    var maybeLastSeenChild = new $c_sr_ObjectRef((void 0));
    var this$18 = $n(childSource);
    var onNext = new $c_sjsr_AnonFunction1(((newComponent$2) => {
      var newChildNode = $n(renderable).asNode__O__Lcom_raquo_laminar_nodes_ChildNode(newComponent$2);
      var elem = $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount;
      var elem$1 = 0;
      elem$1 = elem;
      var value = maybeLastSeenChild.sr_ObjectRef__f_elem;
      if ((value === (void 0))) {
        var $x_1 = true
      } else {
        var x$1 = $as_Lcom_raquo_laminar_nodes_ChildNode(value);
        var x = $n(x$1).ref__Lorg_scalajs_dom_Node();
        var y = $n($n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode).ref__Lorg_scalajs_dom_Node().nextSibling;
        var $x_1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
      };
      if ($x_1) {
        var value$1 = value
      } else {
        var value$1 = (void 0)
      };
      if ((value$1 === (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChildAfter__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z($n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, newChildNode, $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode)
      } else {
        var lastSeenChild = $as_Lcom_raquo_laminar_nodes_ChildNode(value$1);
        var replaced = $m_Lcom_raquo_laminar_nodes_ParentNode$().replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z($n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, lastSeenChild, newChildNode);
        if ((replaced || (lastSeenChild === newChildNode))) {
          elem$1 = (((-1) + elem$1) | 0)
        }
      };
      $n(ctx).removeOldChildNodesFromDOM__Lcom_raquo_laminar_nodes_ChildNode__V(newChildNode);
      $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.clear();
      $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap.set($n(newChildNode).ref__Lorg_scalajs_dom_Node(), newChildNode);
      var $x_2 = $n(ctx);
      var this$14 = $n($m_s_package$().s_package$__f_Nil);
      $x_2.Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = new $c_sci_$colon$colon(newChildNode, this$14);
      $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = 1;
      maybeLastSeenChild.sr_ObjectRef__f_elem = newChildNode
    }));
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$18, onNext, owner)
  }));
  var x$3 = $m_s_None$();
  return new $c_Lcom_raquo_laminar_modifiers_Inserter(x$3, true, x$2)
});
var $d_Lcom_raquo_laminar_modifiers_ChildInserter$ = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_ChildInserter$: 0
}, false, "com.raquo.laminar.modifiers.ChildInserter$", {
  Lcom_raquo_laminar_modifiers_ChildInserter$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_modifiers_ChildInserter$.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_ChildInserter$;
var $n_Lcom_raquo_laminar_modifiers_ChildInserter$;
function $m_Lcom_raquo_laminar_modifiers_ChildInserter$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_ChildInserter$)) {
    $n_Lcom_raquo_laminar_modifiers_ChildInserter$ = new $c_Lcom_raquo_laminar_modifiers_ChildInserter$()
  };
  return $n_Lcom_raquo_laminar_modifiers_ChildInserter$
}
function $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__sci_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__I($thiz, prevChildren, nextChildren, nextChildrenMap, parentNode, sentinelNode, prevChildrenCount) {
  var index = new $c_sr_IntRef(0);
  var currentChildrenCount = new $c_sr_IntRef(prevChildrenCount);
  var elem = $n(sentinelNode).ref__Lorg_scalajs_dom_Node().nextSibling;
  var prevChildRef = new $c_sr_ObjectRef(elem);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  $n(nextChildren).foreach__F1__V(new $c_sjsr_AnonFunction1(((nextChild$2) => {
    var nextChild = $as_Lcom_raquo_laminar_nodes_ChildNode(nextChild$2);
    if ((currentChildrenCount.sr_IntRef__f_elem <= index.sr_IntRef__f_elem)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChildAfter__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, nextChild, $as_Lcom_raquo_laminar_nodes_ChildNode(lastIndexChild.sr_ObjectRef__f_elem));
      prevChildRef.sr_ObjectRef__f_elem = $n(nextChild).ref__Lorg_scalajs_dom_Node();
      currentChildrenCount.sr_IntRef__f_elem = ((1 + currentChildrenCount.sr_IntRef__f_elem) | 0)
    } else {
      var x = $n(nextChild).ref__Lorg_scalajs_dom_Node();
      var y = prevChildRef.sr_ObjectRef__f_elem;
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        if ((!$uZ(prevChildren.has($n(nextChild).ref__Lorg_scalajs_dom_Node())))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChildAfter__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, nextChild, $as_Lcom_raquo_laminar_nodes_ChildNode(lastIndexChild.sr_ObjectRef__f_elem));
          prevChildRef.sr_ObjectRef__f_elem = $n(nextChild).ref__Lorg_scalajs_dom_Node();
          currentChildrenCount.sr_IntRef__f_elem = ((1 + currentChildrenCount.sr_IntRef__f_elem) | 0)
        } else {
          while (true) {
            var x$1 = $n(nextChild).ref__Lorg_scalajs_dom_Node();
            var y$1 = prevChildRef.sr_ObjectRef__f_elem;
            if (((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y$1)) && (!$p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($m_Lcom_raquo_laminar_modifiers_ChildrenInserter$(), nextChildrenMap, prevChildRef.sr_ObjectRef__f_elem)))) {
              var nextPrevChildRef = prevChildRef.sr_ObjectRef__f_elem.nextSibling;
              var prevChild = $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($m_Lcom_raquo_laminar_modifiers_ChildrenInserter$(), prevChildren, prevChildRef.sr_ObjectRef__f_elem);
              $m_Lcom_raquo_laminar_nodes_ParentNode$().removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, prevChild);
              prevChildRef.sr_ObjectRef__f_elem = nextPrevChildRef;
              currentChildrenCount.sr_IntRef__f_elem = (((-1) + currentChildrenCount.sr_IntRef__f_elem) | 0)
            } else {
              break
            }
          };
          var x$2 = $n(nextChild).ref__Lorg_scalajs_dom_Node();
          var y$2 = prevChildRef.sr_ObjectRef__f_elem;
          if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$2))) {
            $m_Lcom_raquo_laminar_nodes_ParentNode$().insertChildAfter__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, nextChild, $as_Lcom_raquo_laminar_nodes_ChildNode(lastIndexChild.sr_ObjectRef__f_elem));
            prevChildRef.sr_ObjectRef__f_elem = $n(nextChild).ref__Lorg_scalajs_dom_Node()
          }
        }
      }
    };
    if ((prevChildRef.sr_ObjectRef__f_elem.nextSibling === null)) {
      currentChildrenCount.sr_IntRef__f_elem = ((1 + index.sr_IntRef__f_elem) | 0)
    } else {
      prevChildRef.sr_ObjectRef__f_elem = prevChildRef.sr_ObjectRef__f_elem.nextSibling
    };
    lastIndexChild.sr_ObjectRef__f_elem = nextChild;
    index.sr_IntRef__f_elem = ((1 + index.sr_IntRef__f_elem) | 0)
  })));
  while ((index.sr_IntRef__f_elem < currentChildrenCount.sr_IntRef__f_elem)) {
    var nextPrevChildRef$1 = prevChildRef.sr_ObjectRef__f_elem.nextSibling;
    var prevChild$1 = $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.sr_ObjectRef__f_elem);
    $m_Lcom_raquo_laminar_nodes_ParentNode$().removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, prevChild$1);
    prevChildRef.sr_ObjectRef__f_elem = nextPrevChildRef$1;
    currentChildrenCount.sr_IntRef__f_elem = (((-1) + currentChildrenCount.sr_IntRef__f_elem) | 0)
  };
  return currentChildrenCount.sr_IntRef__f_elem
}
function $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, ref) {
  return $uZ(nextChildrenMap.has(ref))
}
function $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, ref) {
  var value = prevChildren.get(ref);
  if ((value === (void 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("prevChildFromRef[children]: not found for " + ref))
  };
  return $as_Lcom_raquo_laminar_nodes_ChildNode(value)
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_ChildrenInserter$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype = $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype;
$c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype.apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__Lcom_raquo_laminar_modifiers_Inserter = (function(childrenSource, renderableNode) {
  var x$2 = new $c_sjsr_AnonFunction2(((ctx$2, owner$2) => {
    var ctx = $as_Lcom_raquo_laminar_lifecycle_InsertContext(ctx$2);
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    if ((!$n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_strictMode)) {
      $n(ctx).forceSetStrictMode__V()
    };
    var a = $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes;
    var maybeLastSeenChildren = new $c_sr_ObjectRef(a);
    var this$9 = $n(childrenSource);
    var onNext = new $c_sjsr_AnonFunction1(((components$2) => {
      var components = $as_sci_Seq(components$2);
      var newChildren = $n(renderableNode).asNodeSeq__sci_Seq__sci_Seq(components);
      maybeLastSeenChildren.sr_ObjectRef__f_elem = newChildren;
      var newChildrenMap = $m_Lcom_raquo_laminar_lifecycle_InsertContext$().nodesToMap__sci_Seq__Lcom_raquo_ew_JsMap(newChildren);
      $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount = $p_Lcom_raquo_laminar_modifiers_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__sci_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__I($m_Lcom_raquo_laminar_modifiers_ChildrenInserter$(), $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap, newChildren, newChildrenMap, $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_parentNode, $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_sentinelNode, $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodeCount);
      $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodes = newChildren;
      $n(ctx).Lcom_raquo_laminar_lifecycle_InsertContext__f_extraNodesMap = newChildrenMap
    }));
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$9, onNext, owner)
  }));
  var x$3 = $m_s_None$();
  return new $c_Lcom_raquo_laminar_modifiers_Inserter(x$3, true, x$2)
});
var $d_Lcom_raquo_laminar_modifiers_ChildrenInserter$ = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_ChildrenInserter$: 0
}, false, "com.raquo.laminar.modifiers.ChildrenInserter$", {
  Lcom_raquo_laminar_modifiers_ChildrenInserter$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_modifiers_ChildrenInserter$.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_ChildrenInserter$;
var $n_Lcom_raquo_laminar_modifiers_ChildrenInserter$;
function $m_Lcom_raquo_laminar_modifiers_ChildrenInserter$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_ChildrenInserter$)) {
    $n_Lcom_raquo_laminar_modifiers_ChildrenInserter$ = new $c_Lcom_raquo_laminar_modifiers_ChildrenInserter$()
  };
  return $n_Lcom_raquo_laminar_modifiers_ChildrenInserter$
}
function $is_Lcom_raquo_laminar_modifiers_Modifier(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_modifiers_Modifier)))
}
function $as_Lcom_raquo_laminar_modifiers_Modifier(obj) {
  return (($is_Lcom_raquo_laminar_modifiers_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.modifiers.Modifier"))
}
function $isArrayOf_Lcom_raquo_laminar_modifiers_Modifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_modifiers_Modifier)))
}
function $asArrayOf_Lcom_raquo_laminar_modifiers_Modifier(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_modifiers_Modifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.modifiers.Modifier;", depth))
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.Lcom_raquo_laminar_modifiers_Modifier$__f_empty = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.Lcom_raquo_laminar_modifiers_Modifier$__f_empty = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1()
}
$c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Modifier$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_Modifier$: 0
}, false, "com.raquo.laminar.modifiers.Modifier$", {
  Lcom_raquo_laminar_modifiers_Modifier$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_modifiers_Modifier$.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_Modifier$;
var $n_Lcom_raquo_laminar_modifiers_Modifier$;
function $m_Lcom_raquo_laminar_modifiers_Modifier$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Modifier$)) {
    $n_Lcom_raquo_laminar_modifiers_Modifier$ = new $c_Lcom_raquo_laminar_modifiers_Modifier$()
  };
  return $n_Lcom_raquo_laminar_modifiers_Modifier$
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  this.Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  $m_Lcom_raquo_laminar_modifiers_RenderableNode$();
  var renderNode = new $c_sjsr_AnonFunction1(((x$2) => {
    var x = $as_Lcom_raquo_laminar_nodes_ChildNode(x$2);
    return x
  }));
  var renderNodeSeq = new $c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $as_sci_Seq(x$3$2);
    return x$3
  }));
  var renderNodeIterable = new $c_sjsr_AnonFunction1(((x$4$2) => {
    var x$4 = $as_sc_Iterable(x$4$2);
    return x$4
  }));
  var renderNodeOption = new $c_sjsr_AnonFunction1(((x$5$2) => {
    var x$5 = $as_s_Option(x$5$2);
    return x$5
  }));
  this.Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1(renderNode, renderNodeSeq, renderNodeIterable, renderNodeOption)
}
$c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_RenderableNode$: 0
}, false, "com.raquo.laminar.modifiers.RenderableNode$", {
  Lcom_raquo_laminar_modifiers_RenderableNode$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_RenderableNode$;
var $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
function $m_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableNode$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$()
  };
  return $n_Lcom_raquo_laminar_modifiers_RenderableNode$
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$() {
  this.Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  var render = new $c_sjsr_AnonFunction1(((x$2) => {
    var x = $as_T(x$2);
    return x
  }));
  this.Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render);
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  var render$1 = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $uI(x$1$2);
    return ("" + x$1)
  }));
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$1);
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  var render$2 = new $c_sjsr_AnonFunction1(((x$2$2$2) => {
    var x$2$2 = $uD(x$2$2$2);
    return ("" + x$2$2)
  }));
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$2);
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  var render$3 = new $c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $uZ(x$3$2);
    return ("" + x$3)
  }));
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$3);
  $m_Lcom_raquo_laminar_modifiers_RenderableText$();
  var render$4 = new $c_sjsr_AnonFunction1(((x$4$2) => {
    var x$4 = $as_Lcom_raquo_laminar_nodes_TextNode(x$4$2);
    return $n(x$4).text__T()
  }));
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$4)
}
$c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_RenderableText$: 0
}, false, "com.raquo.laminar.modifiers.RenderableText$", {
  Lcom_raquo_laminar_modifiers_RenderableText$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_RenderableText$;
var $n_Lcom_raquo_laminar_modifiers_RenderableText$;
function $m_Lcom_raquo_laminar_modifiers_RenderableText$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableText$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableText$ = new $c_Lcom_raquo_laminar_modifiers_RenderableText$()
  };
  return $n_Lcom_raquo_laminar_modifiers_RenderableText$
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Setter$() {
  $n_Lcom_raquo_laminar_modifiers_Setter$ = this;
  new $c_Lcom_raquo_laminar_modifiers_Setter$$anon$1()
}
$c_Lcom_raquo_laminar_modifiers_Setter$.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Setter$.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Setter$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Setter$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_Setter$.prototype = $c_Lcom_raquo_laminar_modifiers_Setter$.prototype;
var $d_Lcom_raquo_laminar_modifiers_Setter$ = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_Setter$: 0
}, false, "com.raquo.laminar.modifiers.Setter$", {
  Lcom_raquo_laminar_modifiers_Setter$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_modifiers_Setter$.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_Setter$;
var $n_Lcom_raquo_laminar_modifiers_Setter$;
function $m_Lcom_raquo_laminar_modifiers_Setter$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Setter$)) {
    $n_Lcom_raquo_laminar_modifiers_Setter$ = new $c_Lcom_raquo_laminar_modifiers_Setter$()
  };
  return $n_Lcom_raquo_laminar_modifiers_Setter$
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype;
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  var nextParent = new $c_s_Some(parent);
  $n(child).willSetParent__s_Option__V(nextParent);
  var appended = $m_Lcom_raquo_laminar_DomApi$().appendChild__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z($n(parent).ref__Lorg_scalajs_dom_Node(), $n(child).ref__Lorg_scalajs_dom_Node());
  if (appended) {
    $n(child).setParent__s_Option__V(nextParent)
  };
  return appended
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.removeChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, child) {
  var removed = false;
  var x = $n(child).ref__Lorg_scalajs_dom_Node().parentNode;
  var y = $n(parent).ref__Lorg_scalajs_dom_Node();
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(x, y)) {
    $n(child).willSetParent__s_Option__V($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().removeChild__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z($n(parent).ref__Lorg_scalajs_dom_Node(), $n(child).ref__Lorg_scalajs_dom_Node());
    $n(child).setParent__s_Option__V($m_s_None$())
  };
  return removed
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.insertChildAfter__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, newChild, referenceChild) {
  var nextParent = new $c_s_Some(parent);
  $n(newChild).willSetParent__s_Option__V(nextParent);
  var inserted = $m_Lcom_raquo_laminar_DomApi$().insertAfter__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z($n(parent).ref__Lorg_scalajs_dom_Node(), $n(newChild).ref__Lorg_scalajs_dom_Node(), $n(referenceChild).ref__Lorg_scalajs_dom_Node());
  $n(newChild).setParent__s_Option__V(nextParent);
  return inserted
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.replaceChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Lcom_raquo_laminar_nodes_ChildNode__Z = (function(parent, oldChild, newChild) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    var this$1 = $n(oldChild);
    if ($n(this$1.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option()).contains__O__Z(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      $n(oldChild).willSetParent__s_Option__V($m_s_None$());
      $n(newChild).willSetParent__s_Option__V(newChildNextParent);
      replaced = $m_Lcom_raquo_laminar_DomApi$().replaceChild__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z($n(parent).ref__Lorg_scalajs_dom_Node(), $n(newChild).ref__Lorg_scalajs_dom_Node(), $n(oldChild).ref__Lorg_scalajs_dom_Node());
      if (replaced) {
        $n(oldChild).setParent__s_Option__V($m_s_None$());
        $n(newChild).setParent__s_Option__V(newChildNextParent)
      }
    }
  };
  return replaced
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_ParentNode$: 0
}, false, "com.raquo.laminar.nodes.ParentNode$", {
  Lcom_raquo_laminar_nodes_ParentNode$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_nodes_ParentNode$.prototype.$classData = $d_Lcom_raquo_laminar_nodes_ParentNode$;
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$()
  };
  return $n_Lcom_raquo_laminar_nodes_ParentNode$
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = $c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype;
$c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype.unsafeBindPrependSubscription__Lcom_raquo_laminar_nodes_ReactiveElement__F1__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    return $as_Lcom_raquo_airstream_ownership_Subscription($n(subscribe).apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))
  })), true)
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_ReactiveElement$: 0
}, false, "com.raquo.laminar.nodes.ReactiveElement$", {
  Lcom_raquo_laminar_nodes_ReactiveElement$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype.$classData = $d_Lcom_raquo_laminar_nodes_ReactiveElement$;
var $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
function $m_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ReactiveElement$)) {
    $n_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $c_Lcom_raquo_laminar_nodes_ReactiveElement$()
  };
  return $n_Lcom_raquo_laminar_nodes_ReactiveElement$
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().initClass({
  Lcom_raquo_laminar_receivers_ChildReceiver$: 0
}, false, "com.raquo.laminar.receivers.ChildReceiver$", {
  Lcom_raquo_laminar_receivers_ChildReceiver$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype.$classData = $d_Lcom_raquo_laminar_receivers_ChildReceiver$;
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$()
  };
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = new $h_O();
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype.constructor = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype;
var $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $TypeData().initClass({
  Lcom_raquo_laminar_receivers_ChildrenReceiver$: 0
}, false, "com.raquo.laminar.receivers.ChildrenReceiver$", {
  Lcom_raquo_laminar_receivers_ChildrenReceiver$: 1,
  O: 1
});
$c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype.$classData = $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
var $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildrenReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$()
  };
  return $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < $uI(lines.length))) {
    var line = $as_T(lines[i]);
    var this$1 = $n(line);
    if ((!(this$1 === ""))) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var x = mtch[1];
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x));
        var $x_6 = $as_T(classAndMethodName[0]);
        var $x_5 = $as_T(classAndMethodName[1]);
        var x$1 = mtch[2];
        var $x_4 = $as_T(x$1);
        var x$2 = mtch[3];
        var s = $as_T(x$2);
        var $x_3 = $uI(parseInt(s));
        var x$3 = mtch[4];
        if ((x$3 !== (void 0))) {
          var x$1$1 = $as_T(x$3);
          var $x_2 = $uI(parseInt(x$1$1))
        } else {
          var $x_2 = (-1)
        };
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_6, $x_5, $x_4, $x_3, $x_2));
        $uI($x_1)
      } else {
        $uI(trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))))
      }
    };
    i = ((1 + i) | 0)
  };
  var len = $uI(trace.length);
  var result = new ($d_jl_StackTraceElement.getArrayOf().constr)(len);
  i = 0;
  while ((i < len)) {
    $n(result).set(i, $as_jl_StackTraceElement(trace[i]));
    i = ((1 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    var x = matchBCOrS[1];
    var $x_1 = $p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x));
    var x$1 = matchBCOrS[2];
    return [$x_1, $p_jl_StackTrace$__decodeMethodName__T__T($thiz, $as_T(x$1))]
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      var x$2 = matchCTOrN[1];
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$2)), "<init>"]
    } else {
      var matchM = PatM.exec(functionName);
      if ((matchM !== null)) {
        var x$3 = matchM[1];
        return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$3)), "<clinit>"]
      } else {
        return ["<jscode>", functionName]
      }
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, encodedName))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = $as_T(dict$1[encodedName])
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName)
  };
  var this$3 = $n(base);
  var this$4 = $n($as_T(this$3.split("_").join(".")));
  return $as_T(this$4.split("\uff3f").join("_"))
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    var dict = {};
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value
      };
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0)
    };
    $thiz.jl_StackTrace$__f_decompressedClasses = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((1 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedClasses
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedClasses)
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    var dict = {};
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.jl_StackTrace$__f_decompressedPrefixes = dict;
    $thiz.jl_StackTrace$__f_bitmap$0 = (((2 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_decompressedPrefixes
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedPrefixes)
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_StackTrace$__f_compressedPrefixes = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.jl_StackTrace$__f_bitmap$0 = (((4 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_StackTrace$__f_compressedPrefixes
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_compressedPrefixes)
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  var this$1 = $n(encodedName);
  if (((this$1.length >= 0) && ($as_T(this$1.substring(0, 7)) === "init___"))) {
    return "<init>"
  } else {
    var this$2 = $n(encodedName);
    var methodNameLen = $uI(this$2.indexOf("__"));
    return ((methodNameLen < 0) ? encodedName : $as_T(encodedName.substring(0, methodNameLen)))
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ($uZ((!(!(!e)))) ? [] : ($uZ((!(!(e.arguments && e.stack)))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ($uZ((!(!(e.stack && e.sourceURL)))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ($uZ((!(!(e.stack && e.number)))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ($uZ((!(!(e.stack && e.fileName)))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ($uZ((!(!(e.message && e["opera#sourceloc"])))) ? ($uZ((!(!(!e.stacktrace)))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ($uZ((!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ($uZ((!(!((e.message && e.stack) && e.stacktrace)))) ? ($uZ((!(!(e.stacktrace.indexOf("called from line") < 0.0)))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ($uZ((!(!(e.stack && (!e.fileName))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))))
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return $as_T($as_T($as_T($as_T($as_T(($as_T(e.stack) + "\n").replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("^[\\s\\S]+?\\s+at\\s+"), " at ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s+(at eval )?at\\s+", "gm"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2")).split("\n").slice(0, (-1))
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return $as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("(?:\\n@:0)?\\s+$", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@")).split("\n")
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s*at\\s+(.*)$", "gm"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Anonymous function\\s+", "gm"), "{anonymous}() ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2")).split("\n");
  return qual$1.slice(1)
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("\\[native code\\]\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?=\\w+Error\\:).*$\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^@", "gm"), "{anonymous}()@")).split("\n")
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = $as_T(e.message).split("\n");
  var result = [];
  var i = 2;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[2];
      var x$1 = mtch[1];
      var $x_1 = result.push(((("{anonymous}()@" + x) + ":") + x$1));
      $uI($x_1)
    };
    i = ((2 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = $as_T(((x !== (void 0)) ? x : "{anonymous}"));
      var x$1 = mtch[2];
      var x$2 = mtch[1];
      var $x_1 = result.push(((((fnName + "()@") + x$1) + ":") + x$2));
      $uI($x_1)
    };
    i = ((2 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(.*)@(.+):(\\d+)$");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[1];
      if ((x !== (void 0))) {
        var x$2 = $as_T(x);
        var fnName = (x$2 + "()")
      } else {
        var fnName = "global code"
      };
      var x$1 = mtch[2];
      var x$3 = mtch[3];
      var $x_1 = result.push(((((fnName + "@") + x$1) + ":") + x$3));
      $uI($x_1)
    };
    i = ((1 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = $as_T(e.stacktrace).split("\n");
  var result = [];
  var i = 0;
  var len = $uI(lines.length);
  while ((i < len)) {
    var mtch = lineRE.exec($as_T(lines[i]));
    if ((mtch !== null)) {
      var x = mtch[4];
      var $x_1 = $as_T(x);
      var x$1 = mtch[1];
      var x$2 = mtch[2];
      var location = (((($x_1 + ":") + x$1) + ":") + x$2);
      var x$3 = mtch[2];
      var fnName0 = $as_T(((x$3 !== (void 0)) ? x$3 : "global code"));
      var fnName = $as_T($as_T(fnName0.replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function: (\\S+)>"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function>"), "{anonymous}"));
      $uI(result.push(((fnName + "@") + location)))
    };
    i = ((2 + i) | 0)
  };
  return result
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return []
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < $uI($p_jl_StackTrace$__compressedPrefixes__O($thiz).length))) {
      var prefix = $as_T($p_jl_StackTrace$__compressedPrefixes__O($thiz)[i]);
      var this$1 = $n(encodedName$1);
      if ((this$1.length >= 0)) {
        var this$2 = $n(prefix);
        var $x_2 = this$1.substring(0, this$2.length);
        var $x_1 = ($as_T($x_2) === prefix)
      } else {
        var $x_1 = false
      };
      if ($x_1) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        var $x_4 = $as_T(dict[prefix]);
        var this$4 = $n(prefix);
        var $x_3 = encodedName$1.substring(this$4.length);
        return (("" + $x_4) + $as_T($x_3))
      } else {
        i = ((1 + i) | 0)
      }
    } else {
      var this$5 = $n(encodedName$1);
      if (((this$5.length >= 0) && ($as_T(this$5.substring(0, 1)) === "L"))) {
        return $as_T(encodedName$1.substring(1))
      } else {
        return encodedName$1
      }
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.jl_StackTrace$__f_decompressedClasses = null;
  this.jl_StackTrace$__f_decompressedPrefixes = null;
  this.jl_StackTrace$__f_compressedPrefixes = null;
  this.jl_StackTrace$__f_bitmap$0 = 0
}
$c_jl_StackTrace$.prototype = new $h_O();
$c_jl_StackTrace$.prototype.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
  /*<skip>*/
}
$h_jl_StackTrace$.prototype = $c_jl_StackTrace$.prototype;
$c_jl_StackTrace$.prototype.extract__O__Ajl_StackTraceElement = (function(jsError) {
  var lines = $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError);
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, lines)
});
var $d_jl_StackTrace$ = new $TypeData().initClass({
  jl_StackTrace$: 0
}, false, "java.lang.StackTrace$", {
  jl_StackTrace$: 1,
  O: 1
});
$c_jl_StackTrace$.prototype.$classData = $d_jl_StackTrace$;
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$()
  };
  return $n_jl_StackTrace$
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
  /*<skip>*/
}
$c_jl_StackTrace$StringRE$.prototype = new $h_O();
$c_jl_StackTrace$StringRE$.prototype.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
  /*<skip>*/
}
$h_jl_StackTrace$StringRE$.prototype = $c_jl_StackTrace$StringRE$.prototype;
$c_jl_StackTrace$StringRE$.prototype.re$extension0__T__O = (function(this$) {
  return new RegExp(this$)
});
$c_jl_StackTrace$StringRE$.prototype.re$extension1__T__T__O = (function(this$, mods) {
  return new RegExp(this$, mods)
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().initClass({
  jl_StackTrace$StringRE$: 0
}, false, "java.lang.StackTrace$StringRE$", {
  jl_StackTrace$StringRE$: 1,
  O: 1
});
$c_jl_StackTrace$StringRE$.prototype.$classData = $d_jl_StackTrace$StringRE$;
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$()
  };
  return $n_jl_StackTrace$StringRE$
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.jl_System$Streams$__f_out = null;
  this.jl_System$Streams$__f_err = null;
  $n_jl_System$Streams$ = this;
  this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true)
}
$c_jl_System$Streams$.prototype = new $h_O();
$c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
  /*<skip>*/
}
$h_jl_System$Streams$.prototype = $c_jl_System$Streams$.prototype;
var $d_jl_System$Streams$ = new $TypeData().initClass({
  jl_System$Streams$: 0
}, false, "java.lang.System$Streams$", {
  jl_System$Streams$: 1,
  O: 1
});
$c_jl_System$Streams$.prototype.$classData = $d_jl_System$Streams$;
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$()
  };
  return $n_jl_System$Streams$
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  var value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
  /*<skip>*/
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1))
  } else {
    return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1)
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
  /*<skip>*/
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  var this$1 = $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
}
/** @constructor */
function $c_jl_reflect_Array$() {
  /*<skip>*/
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
  /*<skip>*/
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__I__O = (function(componentType, length) {
  return $n(componentType).newArrayOfThisClass__O__O([length])
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array)
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = $n(a).u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0)
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = $n(a).get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid
      } else if ((cmp === 0)) {
        return mid
      } else {
        startIndex = ((1 + mid) | 0)
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AJ__AJ__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = $n(a).get(i$1);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var i$2 = i;
    var t$1 = $n(b).get(i$2);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AS__AS__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AC__AC__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AB__AB__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AZ__AZ__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AD__AD__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.equals__AF__AF__Z = (function(a, b) {
  if ((a === b)) {
    return true
  };
  if (((a === null) || (b === null))) {
    return false
  };
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false
  };
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!Object.is(a$1, b$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), newLength), 1);
  $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
  return ret
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to))
  };
  var len = $n(original).u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), retLength), 1);
  $systemArraycopyRefs($n(original), from, $n(ret), 0, copyLength);
  return ret
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $x_1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth))
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_s_PartialFunction$() {
  this.s_PartialFunction$__f_fallback_fn = null;
  this.s_PartialFunction$__f_empty_pf = null;
  $n_s_PartialFunction$ = this;
  this.s_PartialFunction$__f_fallback_fn = new $c_sjsr_AnonFunction1(((x$2$2) => $m_s_PartialFunction$().s_PartialFunction$__f_fallback_fn));
  new $c_sjsr_AnonFunction1(((x$3$2) => false));
  this.s_PartialFunction$__f_empty_pf = new $c_s_PartialFunction$$anon$1()
}
$c_s_PartialFunction$.prototype = new $h_O();
$c_s_PartialFunction$.prototype.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
  /*<skip>*/
}
$h_s_PartialFunction$.prototype = $c_s_PartialFunction$.prototype;
var $d_s_PartialFunction$ = new $TypeData().initClass({
  s_PartialFunction$: 0
}, false, "scala.PartialFunction$", {
  s_PartialFunction$: 1,
  O: 1
});
$c_s_PartialFunction$.prototype.$classData = $d_s_PartialFunction$;
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$()
  };
  return $n_s_PartialFunction$
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.sc_ArrayOps$__f_fallback = null;
  $n_sc_ArrayOps$ = this;
  this.sc_ArrayOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_ArrayOps$().sc_ArrayOps$__f_fallback))
}
$c_sc_ArrayOps$.prototype = new $h_O();
$c_sc_ArrayOps$.prototype.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
  /*<skip>*/
}
$h_sc_ArrayOps$.prototype = $c_sc_ArrayOps$.prototype;
var $d_sc_ArrayOps$ = new $TypeData().initClass({
  sc_ArrayOps$: 0
}, false, "scala.collection.ArrayOps$", {
  sc_ArrayOps$: 1,
  O: 1
});
$c_sc_ArrayOps$.prototype.$classData = $d_sc_ArrayOps$;
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$()
  };
  return $n_sc_ArrayOps$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O())
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  var i = start;
  var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && $n(it).hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $n(it).next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end)
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
}
/** @constructor */
function $c_sc_StringOps$() {
  this.sc_StringOps$__f_fallback = null;
  $n_sc_StringOps$ = this;
  this.sc_StringOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_StringOps$().sc_StringOps$__f_fallback))
}
$c_sc_StringOps$.prototype = new $h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
  /*<skip>*/
}
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
$c_sc_StringOps$.prototype.contains$extension__T__C__Z = (function(this$, elem) {
  return ($f_T__indexOf__I__I($n(this$), elem) >= 0)
});
$c_sc_StringOps$.prototype.stripMargin$extension__T__C__T = (function(this$, marginChar) {
  var this$1 = $n(this$);
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$1.length);
  $m_sc_StringOps$();
  $m_sc_StringOps$();
  var this$4 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$4.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < this$4.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
    var arg1 = this$4.next__T();
    var this$5 = $n(arg1);
    var len = this$5.length;
    var index = 0;
    while (true) {
      if ((index < len)) {
        var this$6 = $n(arg1);
        var index$1 = index;
        var $x_1 = ($charAt(this$6, index$1) <= 32)
      } else {
        var $x_1 = false
      };
      if ($x_1) {
        index = ((1 + index) | 0)
      } else {
        break
      }
    };
    if ((index < len)) {
      var this$7 = $n(arg1);
      var index$2 = index;
      var $x_2 = ($charAt(this$7, index$2) === marginChar)
    } else {
      var $x_2 = false
    };
    if ($x_2) {
      var this$8 = $n(arg1);
      var beginIndex = ((1 + index) | 0);
      if (((beginIndex < 0) || (beginIndex > this$8.length))) {
        $charAt(this$8, beginIndex)
      };
      var stripped = $as_T(this$8.substring(beginIndex))
    } else {
      var stripped = arg1
    };
    sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + sb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + stripped)
  };
  return sb.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
var $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
function $p_sci_IndexedSeqDefaults$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 64
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
}
$c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
  /*<skip>*/
}
$h_sci_IndexedSeqDefaults$.prototype = $c_sci_IndexedSeqDefaults$.prototype;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0)
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
  /*<skip>*/
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var this$1 = $n(a);
  var componentType = $objectGetClass(this$1).getComponentType__jl_Class();
  var length = ((1 + $n(a).u.length) | 0);
  var ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
  var length$1 = $n(a).u.length;
  $systemArraycopyRefs($n(a), 0, $n(ac), 1, length$1);
  $n(ac).set(0, elem);
  return ac
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = $n(a).u.length;
  if ((level === 0)) {
    while ((i < len)) {
      $n(f).apply__O__O($n(a).get(i));
      i = ((1 + i) | 0)
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
      i = ((1 + i) | 0)
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_List = null;
  this.s_package$__f_Nil = null;
  $n_s_package$ = this;
  new $c_s_package$$anon$1();
  $m_sc_Iterable$();
  $m_sc_Iterable$();
  $m_sci_Seq$();
  $m_sci_IndexedSeq$();
  $m_sc_Iterator$();
  this.s_package$__f_List = $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  $m_sci_LazyList$();
  $m_sci_Vector$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC($n(x3));
      return (x2$1 === this$1)
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC($n(x3));
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC($n(xc));
    var this$2 = $uC($n(x2));
    return (this$1 === this$2)
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC($n(xc));
      return (x2$1 === this$3)
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC($n(xc));
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx)
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx)
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx)
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx)
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx)
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx)
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx)
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    $n(x2).set(idx, value)
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    $n(x3).set(idx, $uI(value))
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    $n(x4).set(idx, $uD(value))
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    $n(x5).set(idx, $uJ(value))
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    $n(x6).set(idx, $uF(value))
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    $n(x7).set(idx, $uC(value))
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    $n(x8).set(idx, $uB(value))
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    $n(x9).set(idx, $uS(value))
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    $n(x10).set(idx, $uZ(value))
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException()
  } else {
    throw new $c_s_MatchError(xs)
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I($n(x))
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$c_sr_Statics$PFMarker$.prototype = new $h_O();
$c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$h_sr_Statics$PFMarker$.prototype = $c_sr_Statics$PFMarker$.prototype;
var $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
/** @constructor */
function $c_sjs_js_timers_package$() {
  /*<skip>*/
}
$c_sjs_js_timers_package$.prototype = new $h_O();
$c_sjs_js_timers_package$.prototype.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
  /*<skip>*/
}
$h_sjs_js_timers_package$.prototype = $c_sjs_js_timers_package$.prototype;
$c_sjs_js_timers_package$.prototype.setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle = (function(interval, body) {
  return setTimeout((() => {
    var this$2 = $n(body);
    this$2.apply__O()
  }), interval)
});
var $d_sjs_js_timers_package$ = new $TypeData().initClass({
  sjs_js_timers_package$: 0
}, false, "scala.scalajs.js.timers.package$", {
  sjs_js_timers_package$: 1,
  O: 1
});
$c_sjs_js_timers_package$.prototype.$classData = $d_sjs_js_timers_package$;
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$()
  };
  return $n_sjs_js_timers_package$
}
/** @constructor */
function $c_sjsr_Compat$() {
  /*<skip>*/
}
$c_sjsr_Compat$.prototype = new $h_O();
$c_sjsr_Compat$.prototype.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
  /*<skip>*/
}
$h_sjsr_Compat$.prototype = $c_sjsr_Compat$.prototype;
$c_sjsr_Compat$.prototype.toJSVarArgsImpl__sci_Seq__sjs_js_Array = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    var x2 = $as_sjsr_WrappedVarArgs(seq);
    return $n(x2).sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array
  } else {
    var result = [];
    $n(seq).foreach__F1__V(new $c_sjsr_AnonFunction1(((x$2) => $uI(result.push(x$2)))));
    return result
  }
});
var $d_sjsr_Compat$ = new $TypeData().initClass({
  sjsr_Compat$: 0
}, false, "scala.scalajs.runtime.Compat$", {
  sjsr_Compat$: 1,
  O: 1
});
$c_sjsr_Compat$.prototype.$classData = $d_sjsr_Compat$;
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$()
  };
  return $n_sjsr_Compat$
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init
}
$c_s_util_DynamicVariable.prototype = new $h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
  /*<skip>*/
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")")
});
var $d_s_util_DynamicVariable = new $TypeData().initClass({
  s_util_DynamicVariable: 0
}, false, "scala.util.DynamicVariable", {
  s_util_DynamicVariable: 1,
  O: 1
});
$c_s_util_DynamicVariable.prototype.$classData = $d_s_util_DynamicVariable;
/** @constructor */
function $c_s_util_control_NonFatal$() {
  /*<skip>*/
}
$c_s_util_control_NonFatal$.prototype = new $h_O();
$c_s_util_control_NonFatal$.prototype.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
  /*<skip>*/
}
$h_s_util_control_NonFatal$.prototype = $c_s_util_control_NonFatal$.prototype;
$c_s_util_control_NonFatal$.prototype.apply__jl_Throwable__Z = (function(t) {
  return (!((t instanceof $c_jl_VirtualMachineError) || (false || (false || (false || false)))))
});
var $d_s_util_control_NonFatal$ = new $TypeData().initClass({
  s_util_control_NonFatal$: 0
}, false, "scala.util.control.NonFatal$", {
  s_util_control_NonFatal$: 1,
  O: 1
});
$c_s_util_control_NonFatal$.prototype.$classData = $d_s_util_control_NonFatal$;
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$()
  };
  return $n_s_util_control_NonFatal$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()))
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())))
    };
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0)
  };
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n)
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0)
  };
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
  };
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, i)
    };
    prev = hash;
    i = ((1 + i) | 0)
  };
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().getLength__O__I(a);
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $x_1 = h;
      var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break
      }
      case 2: {
        if ((rangeDiff !== ((hash - prev) | 0))) {
          rangeState = 3
        };
        break
      }
    };
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail
  };
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, ($n(a).get(0) ? 1231 : 1237)), 1);
      break
    }
    default: {
      var initial = ($n(a).get(0) ? 1231 : 1237);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = ($n(a).get(1) ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = ($n(a).get(i) ? 1231 : 1237);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, ($n(a).get(i) ? 1231 : 1237));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $x_1 = h;
      var dv = $n(a).get(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
      break
    }
    default: {
      var dv$1 = $n(a).get(0);
      var initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var dv$2 = $n(a).get(1);
      var prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var dv$3 = $n(a).get(i);
        var hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var dv$4 = $n(a).get(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().doubleHash__D__I(dv$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $x_1 = h;
      var fv = $n(a).get(0);
      var this$1 = $m_sr_Statics$();
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, this$1.doubleHash__D__I(fv)), 1);
      break
    }
    default: {
      var fv$1 = $n(a).get(0);
      var this$2 = $m_sr_Statics$();
      var initial = this$2.doubleHash__D__I(fv$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var fv$2 = $n(a).get(1);
      var this$3 = $m_sr_Statics$();
      var prev = this$3.doubleHash__D__I(fv$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var fv$3 = $n(a).get(i);
        var this$4 = $m_sr_Statics$();
        var hash = this$4.doubleHash__D__I(fv$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var fv$4 = $n(a).get(i);
            var this$5 = $m_sr_Statics$();
            h = this.mix__I__I__I($x_2, this$5.doubleHash__D__I(fv$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $x_1 = h;
      var t = $n(a).get(0);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
      break
    }
    default: {
      var t$1 = $n(a).get(0);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      var initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var t$2 = $n(a).get(1);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      var prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var t$3 = $n(a).get(i);
        var lo$3 = t$3.RTLong__f_lo;
        var hi$3 = t$3.RTLong__f_hi;
        var hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = $n(a).get(i);
            var lo$4 = t$4.RTLong__f_lo;
            var hi$4 = t$4.RTLong__f_hi;
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
      break
    }
    default: {
      var initial = $n(a).get(0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $n(a).get(1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var hash = $n(a).get(i);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, $n(a).get(i));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__Ajl_Void__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).u.length;
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
      break
    }
    default: {
      h = this.mix__I__I__I(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        if ((rangeDiff !== ((-prev) | 0))) {
          h = this.mix__I__I__I(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = 0;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks = null;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback = null;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks = $as_scm_Buffer($m_scm_Buffer$().apply__sci_Seq__sc_SeqOps($m_sci_Nil$()));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback = new $c_sjsr_AnonFunction1(((err$2) => {
    var err = $as_jl_Throwable(err$2);
    try {
      var $x_2 = console;
      var $x_1 = $n(err).getMessage__T();
      var this$2 = $n($m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($n(err).getStackTrace__Ajl_StackTraceElement()));
      $x_2.error((($x_1 + "\n") + $f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", "\n", "")))
    } catch (e) {
      /*<skip>*/
    }
  }));
  new $c_sjsr_AnonFunction1(((x$4$2) => {
    $as_jl_Throwable(x$4$2);
    debugger
  }));
  this.Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback = new $c_sjsr_AnonFunction1(((err$3$2) => {
    var err$3 = $as_jl_Throwable(err$3$2);
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    throw ((err$3 instanceof $c_sjs_js_JavaScriptException) ? err$3.sjs_js_JavaScriptException__f_exception : $n(err$3))
  }));
  new $c_sjsr_AnonFunction1(((err$4$2) => {
    var err$4 = $as_jl_Throwable(err$4$2);
    $m_sjs_js_timers_package$().setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle(0.0, new $c_sjsr_AnonFunction0((() => {
      throw ((err$4 instanceof $c_sjs_js_JavaScriptException) ? err$4.sjs_js_JavaScriptException__f_exception : $n(err$4))
    })))
  }));
  this.registerUnhandledErrorCallback__F1__V(this.Lcom_raquo_airstream_core_AirstreamError$__f_consoleErrorCallback)
}
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype;
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.registerUnhandledErrorCallback__F1__V = (function(fn) {
  var this$1 = $n(this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks);
  $as_scm_Buffer(this$1.addOne__O__scm_Growable(fn))
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.sendUnhandledError__jl_Throwable__V = (function(err) {
  var this$1 = $n(this.Lcom_raquo_airstream_core_AirstreamError$__f_unhandledErrorCallbacks);
  var it = this$1.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var arg1 = $n(it).next__O();
    var fn = $as_F1(arg1);
    try {
      $n(fn).apply__O__O(err)
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = $m_Lcom_raquo_airstream_core_AirstreamError$().Lcom_raquo_airstream_core_AirstreamError$__f_unsafeRethrowErrorCallback;
      if (((fn === null) ? (x$2 === null) : $n(fn).equals__O__Z(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
      } else {
        console.warn("Error processing an unhandled error callback:");
        $m_sjs_js_timers_package$().setTimeout__D__F0__sjs_js_timers_SetTimeoutHandle(0.0, new $c_sjsr_AnonFunction0(((e$2) => (() => {
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
        }))(e$2)))
      }
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$: 0
}, false, "com.raquo.airstream.core.AirstreamError$", {
  Lcom_raquo_airstream_core_AirstreamError$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$;
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$()
  };
  return $n_Lcom_raquo_airstream_core_AirstreamError$
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled = null;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever = false;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_subscriptions = null;
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever = false
}
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype;
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.own__Lcom_raquo_airstream_ownership_Subscription__V = (function(subscription) {
  if (this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever) {
    var this$1 = $n(subscription);
    this$1.com$raquo$airstream$ownership$Subscription$$safeCleanup__V();
    var this$2 = $n(this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_onAccessAfterKilled);
    this$2.apply__O()
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription)
  }
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.killSubscriptions__V = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.Lcom_raquo_airstream_ownership_OneTimeOwner__f_com$raquo$airstream$ownership$OneTimeOwner$$_isKilledForever = true
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().initClass({
  Lcom_raquo_airstream_ownership_OneTimeOwner: 0
}, false, "com.raquo.airstream.ownership.OneTimeOwner", {
  Lcom_raquo_airstream_ownership_OneTimeOwner: 1,
  O: 1,
  Lcom_raquo_airstream_ownership_Owner: 1
});
$c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype.$classData = $d_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$1() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_codecs_package$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_codecs_package$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_codecs_package$$anon$1.prototype = $c_Lcom_raquo_laminar_codecs_package$$anon$1.prototype;
$c_Lcom_raquo_laminar_codecs_package$$anon$1.prototype.encode__O__O = (function(scalaValue) {
  return scalaValue
});
$c_Lcom_raquo_laminar_codecs_package$$anon$1.prototype.decode__O__O = (function(domValue) {
  return domValue
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_codecs_package$$anon$1: 0
}, false, "com.raquo.laminar.codecs.package$$anon$1", {
  Lcom_raquo_laminar_codecs_package$$anon$1: 1,
  O: 1,
  Lcom_raquo_laminar_codecs_Codec: 1
});
$c_Lcom_raquo_laminar_codecs_package$$anon$1.prototype.$classData = $d_Lcom_raquo_laminar_codecs_package$$anon$1;
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype;
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.decode__T__I = (function(domValue) {
  $m_sc_StringOps$();
  var this$3 = $m_jl_Integer$();
  return this$3.parseInt__T__I__I(domValue, 10)
});
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.encode__O__O = (function(scalaValue) {
  var scalaValue$1 = $uI(scalaValue);
  return ("" + scalaValue$1)
});
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.decode__O__O = (function(domValue) {
  return this.decode__T__I($as_T(domValue))
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().initClass({
  Lcom_raquo_laminar_codecs_package$$anon$2: 0
}, false, "com.raquo.laminar.codecs.package$$anon$2", {
  Lcom_raquo_laminar_codecs_package$$anon$2: 1,
  O: 1,
  Lcom_raquo_laminar_codecs_Codec: 1
});
$c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype.$classData = $d_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$4() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype = new $h_O();
$c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$4() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_codecs_package$$anon$4.prototype = $c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype;
$c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype.decode__T__Z = (function(domValue) {
  return (domValue !== null)
});
$c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype.encode__Z__T = (function(scalaValue) {
  return (scalaValue ? "" : null)
});
$c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype.encode__O__O = (function(scalaValue) {
  return this.encode__Z__T($uZ(scalaValue))
});
$c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype.decode__O__O = (function(domValue) {
  return this.decode__T__Z($as_T(domValue))
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$4 = new $TypeData().initClass({
  Lcom_raquo_laminar_codecs_package$$anon$4: 0
}, false, "com.raquo.laminar.codecs.package$$anon$4", {
  Lcom_raquo_laminar_codecs_package$$anon$4: 1,
  O: 1,
  Lcom_raquo_laminar_codecs_Codec: 1
});
$c_Lcom_raquo_laminar_codecs_package$$anon$4.prototype.$classData = $d_Lcom_raquo_laminar_codecs_package$$anon$4;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator)
}
$c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_CompositeKey.prototype.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype;
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_CompositeKey: 0
}, false, "com.raquo.laminar.keys.CompositeKey", {
  Lcom_raquo_laminar_keys_CompositeKey: 1,
  Lcom_raquo_laminar_keys_Key: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_CompositeKey.prototype.$classData = $d_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec__f_separator = null;
  this.Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec__f_separator = separator
}
$c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype;
$c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype.decode__T__sci_List = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().normalize__T__T__sci_List(domValue, this.Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec__f_separator)
});
$c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype.encode__sc_Iterable__T = (function(scalaValue) {
  var this$1 = $n(scalaValue);
  var sep = this.Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec__f_separator;
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "", sep, "")
});
$c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype.encode__O__O = (function(scalaValue) {
  return this.encode__sc_Iterable__T($as_sc_Iterable(scalaValue))
});
$c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype.decode__O__O = (function(domValue) {
  return this.decode__T__sci_List($as_T(domValue))
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec: 0
}, false, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", {
  Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec: 1,
  O: 1,
  Lcom_raquo_laminar_codecs_Codec: 1
});
$c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype.$classData = $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.Lcom_raquo_laminar_keys_EventProp__f_name = null;
  this.Lcom_raquo_laminar_keys_EventProp__f_name = name
}
$c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_EventProp.prototype.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $c_Lcom_raquo_laminar_keys_EventProp.prototype;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_EventProp: 0
}, false, "com.raquo.laminar.keys.EventProp", {
  Lcom_raquo_laminar_keys_EventProp: 1,
  Lcom_raquo_laminar_keys_Key: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_EventProp.prototype.$classData = $d_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_name = null;
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_codec = null;
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_name = name;
  this.Lcom_raquo_laminar_keys_HtmlAttr__f_codec = codec
}
$c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_HtmlAttr.prototype.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype;
$c_Lcom_raquo_laminar_keys_HtmlAttr.prototype.$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3(((element$2, attr$2, value$2$2) => {
    var element = $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(element$2);
    var attr = $as_Lcom_raquo_laminar_keys_HtmlAttr(attr$2);
    $m_Lcom_raquo_laminar_DomApi$().setHtmlAttribute__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlAttr__O__V(element, attr, value$2$2)
  })))
});
function $as_Lcom_raquo_laminar_keys_HtmlAttr(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_keys_HtmlAttr) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.keys.HtmlAttr"))
}
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlAttr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_keys_HtmlAttr)))
}
function $asArrayOf_Lcom_raquo_laminar_keys_HtmlAttr(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_keys_HtmlAttr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.keys.HtmlAttr;", depth))
}
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_HtmlAttr: 0
}, false, "com.raquo.laminar.keys.HtmlAttr", {
  Lcom_raquo_laminar_keys_HtmlAttr: 1,
  Lcom_raquo_laminar_keys_Key: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_HtmlAttr.prototype.$classData = $d_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.Lcom_raquo_laminar_keys_HtmlProp__f_name = null;
  this.Lcom_raquo_laminar_keys_HtmlProp__f_codec = null;
  this.Lcom_raquo_laminar_keys_HtmlProp__f_name = name;
  this.Lcom_raquo_laminar_keys_HtmlProp__f_codec = codec
}
$c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_HtmlProp.prototype.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype;
$c_Lcom_raquo_laminar_keys_HtmlProp.prototype.$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3(((element$2, prop$2, value$2$2) => {
    var element = $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(element$2);
    var prop = $as_Lcom_raquo_laminar_keys_HtmlProp(prop$2);
    $m_Lcom_raquo_laminar_DomApi$().setHtmlProperty__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_keys_HtmlProp__O__V(element, prop, value$2$2)
  })))
});
function $as_Lcom_raquo_laminar_keys_HtmlProp(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_keys_HtmlProp) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.keys.HtmlProp"))
}
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_keys_HtmlProp)))
}
function $asArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.keys.HtmlProp;", depth))
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_HtmlProp: 0
}, false, "com.raquo.laminar.keys.HtmlProp", {
  Lcom_raquo_laminar_keys_HtmlProp: 1,
  Lcom_raquo_laminar_keys_Key: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_HtmlProp.prototype.$classData = $d_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.Lcom_raquo_laminar_keys_SvgAttr__f_localName = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_codec = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_name = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri = null;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_localName = localName;
  this.Lcom_raquo_laminar_keys_SvgAttr__f_codec = codec;
  var this$1 = $n(namespacePrefix);
  if (this$1.isEmpty__Z()) {
    var $x_1 = $m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var x$1 = $as_T(arg1);
    var $x_1 = new $c_s_Some(((x$1 + ":") + this.Lcom_raquo_laminar_keys_SvgAttr__f_localName))
  };
  var this$2 = $n($x_1);
  this.Lcom_raquo_laminar_keys_SvgAttr__f_name = $as_T((this$2.isEmpty__Z() ? this.Lcom_raquo_laminar_keys_SvgAttr__f_localName : this$2.get__O()));
  var this$3 = $n(namespacePrefix);
  if (this$3.isEmpty__Z()) {
    var $x_2 = $m_s_None$()
  } else {
    var arg1$1 = this$3.get__O();
    var namespace = $as_T(arg1$1);
    var $x_2 = new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().namespaceUri__T__T(namespace))
  };
  this.Lcom_raquo_laminar_keys_SvgAttr__f_namespaceUri = $x_2
}
$c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$c_Lcom_raquo_laminar_keys_SvgAttr.prototype.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().initClass({
  Lcom_raquo_laminar_keys_SvgAttr: 0
}, false, "com.raquo.laminar.keys.SvgAttr", {
  Lcom_raquo_laminar_keys_SvgAttr: 1,
  Lcom_raquo_laminar_keys_Key: 1,
  O: 1
});
$c_Lcom_raquo_laminar_keys_SvgAttr.prototype.$classData = $d_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Inserter(initialContext, preferStrictMode, insertFn) {
  this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext = null;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_preferStrictMode = false;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn = null;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext = initialContext;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_preferStrictMode = preferStrictMode;
  this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn = insertFn
}
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Inserter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Inserter() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_Inserter.prototype = $c_Lcom_raquo_laminar_modifiers_Inserter.prototype;
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(element) {
  var this$1 = $n(this.Lcom_raquo_laminar_modifiers_Inserter__f_initialContext);
  var insertContext = $as_Lcom_raquo_laminar_lifecycle_InsertContext((this$1.isEmpty__Z() ? $m_Lcom_raquo_laminar_lifecycle_InsertContext$().reserveSpotContext__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_laminar_lifecycle_InsertContext(element, this.Lcom_raquo_laminar_modifiers_Inserter__f_preferStrictMode) : this$1.get__O()));
  var subscribe = new $c_sjsr_AnonFunction1(((mountContext$2) => {
    var mountContext = $as_Lcom_raquo_laminar_lifecycle_MountContext(mountContext$2);
    return $as_Lcom_raquo_airstream_ownership_Subscription($n(this.Lcom_raquo_laminar_modifiers_Inserter__f_insertFn).apply__O__O__O(insertContext, $n(mountContext).Lcom_raquo_laminar_lifecycle_MountContext__f_owner))
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
    var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
    return $as_Lcom_raquo_airstream_ownership_Subscription(subscribe.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))
  })), false)
});
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  this.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_airstream_ownership_DynamicSubscription(element)
});
var $d_Lcom_raquo_laminar_modifiers_Inserter = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_Inserter: 0
}, false, "com.raquo.laminar.modifiers.Inserter", {
  Lcom_raquo_laminar_modifiers_Inserter: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_modifiers_Inserter.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_Inserter;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype;
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  /*<skip>*/
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_Modifier$$anon$1: 0
}, false, "com.raquo.laminar.modifiers.Modifier$$anon$1", {
  Lcom_raquo_laminar_modifiers_Modifier$$anon$1: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$1) {
  this.Lcom_raquo_laminar_modifiers_Modifier$$anon$2__f_f$1 = null;
  this.Lcom_raquo_laminar_modifiers_Modifier$$anon$2__f_f$1 = f$1
}
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype;
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  var this$1 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
  try {
    $n(this.Lcom_raquo_laminar_modifiers_Modifier$$anon$2__f_f$1).apply__O__O(element)
  } finally {
    this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    if ((this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$1)
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_Modifier$$anon$2: 0
}, false, "com.raquo.laminar.modifiers.Modifier$$anon$2", {
  Lcom_raquo_laminar_modifiers_Modifier$$anon$2: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1(renderNode$1, renderNodeSeq$1, renderNodeIterable$1, renderNodeOption$1) {
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNode$1 = null;
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNodeSeq$1 = null;
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNode$1 = renderNode$1;
  this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNodeSeq$1 = renderNodeSeq$1
}
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype;
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype.asNode__O__Lcom_raquo_laminar_nodes_ChildNode = (function(value) {
  return $as_Lcom_raquo_laminar_nodes_ChildNode($n(this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNode$1).apply__O__O(value))
});
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype.asNodeSeq__sci_Seq__sci_Seq = (function(values) {
  return $as_sci_Seq($n(this.Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1__f_renderNodeSeq$1).apply__O__O(values))
});
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1: 0
}, false, "com.raquo.laminar.modifiers.RenderableNode$$anon$1", {
  Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_RenderableNode: 1
});
$c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$1) {
  this.Lcom_raquo_laminar_modifiers_RenderableText$$anon$1__f_render$1 = null;
  this.Lcom_raquo_laminar_modifiers_RenderableText$$anon$1__f_render$1 = render$1
}
$c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype;
$c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype.asString__O__T = (function(value) {
  return $as_T($n(this.Lcom_raquo_laminar_modifiers_RenderableText$$anon$1__f_render$1).apply__O__O(value))
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_RenderableText$$anon$1: 0
}, false, "com.raquo.laminar.modifiers.RenderableText$$anon$1", {
  Lcom_raquo_laminar_modifiers_RenderableText$$anon$1: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_RenderableText: 1
});
$c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0((() => {
    var this$3 = $n($m_Lcom_raquo_laminar_DomApi$().debugPath__Lorg_scalajs_dom_Node__sci_List__sci_List($thiz.ref__Lorg_scalajs_dom_Node(), ($m_Lcom_raquo_laminar_DomApi$(), $m_s_package$().s_package$__f_Nil)));
    var path = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$3, "", " > ", "");
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + path))
  }))))
}
function $is_Lcom_raquo_laminar_nodes_ParentNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ParentNode)))
}
function $as_Lcom_raquo_laminar_nodes_ParentNode(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ParentNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ParentNode"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ParentNode)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ParentNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ParentNode;", depth))
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.Lcom_raquo_laminar_tags_HtmlTag__f_name = null;
  this.Lcom_raquo_laminar_tags_HtmlTag__f_name = name
}
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype;
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(modifiers) {
  var element = this.build__Lcom_raquo_laminar_nodes_ReactiveHtmlElement();
  $n(modifiers).foreach__F1__V(new $c_sjsr_AnonFunction1(((modifier$2) => {
    var modifier = $as_Lcom_raquo_laminar_modifiers_Modifier(modifier$2);
    $n(modifier).apply__Lcom_raquo_laminar_nodes_ReactiveElement__V(element)
  })));
  return element
});
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype.build__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().createHtmlElement__Lcom_raquo_laminar_tags_HtmlTag__Lorg_scalajs_dom_HTMLElement(this))
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().initClass({
  Lcom_raquo_laminar_tags_HtmlTag: 0
}, false, "com.raquo.laminar.tags.HtmlTag", {
  Lcom_raquo_laminar_tags_HtmlTag: 1,
  O: 1,
  Lcom_raquo_laminar_tags_Tag: 1
});
$c_Lcom_raquo_laminar_tags_HtmlTag.prototype.$classData = $d_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.Lcom_raquo_laminar_tags_SvgTag__f_name = null;
  this.Lcom_raquo_laminar_tags_SvgTag__f_name = name
}
$c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$c_Lcom_raquo_laminar_tags_SvgTag.prototype.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $c_Lcom_raquo_laminar_tags_SvgTag.prototype;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().initClass({
  Lcom_raquo_laminar_tags_SvgTag: 0
}, false, "com.raquo.laminar.tags.SvgTag", {
  Lcom_raquo_laminar_tags_SvgTag: 1,
  O: 1,
  Lcom_raquo_laminar_tags_Tag: 1
});
$c_Lcom_raquo_laminar_tags_SvgTag.prototype.$classData = $d_Lcom_raquo_laminar_tags_SvgTag;
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.toString__I__T = (function(codePoint) {
  if (((codePoint >= 0) && (codePoint < 65536))) {
    return $as_T(String.fromCharCode(codePoint))
  } else if (((codePoint >= 0) && (codePoint <= 1114111))) {
    return $as_T(String.fromCharCode((65535 & (55296 | (((-64) + (codePoint >> 10)) | 0))), (65535 & (56320 | (1023 & codePoint)))))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0)
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0)
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1)
    } else {
      var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v)
    }
  };
  return ((value < radix) ? value : (-1))
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  if ((s === null)) {
    var len = 0
  } else {
    var this$1 = $n(s);
    var len = this$1.length
  };
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var this$2 = $n(s);
  var firstChar = $charAt(this$2, 0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  var $x_1 = i;
  var this$3 = $n(s);
  if (($x_1 >= this$3.length)) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var result = 0.0;
  while ((i !== len)) {
    var $x_2 = $m_jl_Character$();
    var this$4 = $n(s);
    var index = i;
    var digit = $n($x_2).digitWithValidRadix__I__I__I($charAt(this$4, index), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    i = ((1 + i) | 0)
  };
  if (negative) {
    var n = (-result);
    return $uI((n | 0.0))
  } else {
    var n$1 = result;
    return $uI((n$1 | 0.0))
  }
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.jl_StackTraceElement__f_declaringClass = null;
  this.jl_StackTraceElement__f_methodName = null;
  this.jl_StackTraceElement__f_fileName = null;
  this.jl_StackTraceElement__f_lineNumber = 0;
  this.jl_StackTraceElement__f_columnNumber = 0;
  this.jl_StackTraceElement__f_declaringClass = declaringClass;
  this.jl_StackTraceElement__f_methodName = methodName;
  this.jl_StackTraceElement__f_fileName = fileName;
  this.jl_StackTraceElement__f_lineNumber = lineNumber;
  this.jl_StackTraceElement__f_columnNumber = columnNumber
}
$c_jl_StackTraceElement.prototype = new $h_O();
$c_jl_StackTraceElement.prototype.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
  /*<skip>*/
}
$h_jl_StackTraceElement.prototype = $c_jl_StackTraceElement.prototype;
$c_jl_StackTraceElement.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_jl_StackTraceElement)) {
    var x2 = $as_jl_StackTraceElement(that);
    return (((((this.jl_StackTraceElement__f_fileName === $n(x2).jl_StackTraceElement__f_fileName) && (this.jl_StackTraceElement__f_lineNumber === $n(x2).jl_StackTraceElement__f_lineNumber)) && (this.jl_StackTraceElement__f_columnNumber === $n(x2).jl_StackTraceElement__f_columnNumber)) && (this.jl_StackTraceElement__f_declaringClass === $n(x2).jl_StackTraceElement__f_declaringClass)) && (this.jl_StackTraceElement__f_methodName === $n(x2).jl_StackTraceElement__f_methodName))
  } else {
    return false
  }
});
$c_jl_StackTraceElement.prototype.toString__T = (function() {
  var result = "";
  if ((this.jl_StackTraceElement__f_declaringClass !== "<jscode>")) {
    result = ((("" + result) + this.jl_StackTraceElement__f_declaringClass) + ".")
  };
  result = (("" + result) + this.jl_StackTraceElement__f_methodName);
  if ((this.jl_StackTraceElement__f_fileName === null)) {
    result = (result + "(Unknown Source)")
  } else {
    result = ((result + "(") + this.jl_StackTraceElement__f_fileName);
    if ((this.jl_StackTraceElement__f_lineNumber >= 0)) {
      result = ((result + ":") + this.jl_StackTraceElement__f_lineNumber);
      if ((this.jl_StackTraceElement__f_columnNumber >= 0)) {
        result = ((result + ":") + this.jl_StackTraceElement__f_columnNumber)
      }
    };
    result = (result + ")")
  };
  return result
});
$c_jl_StackTraceElement.prototype.hashCode__I = (function() {
  return (((($f_T__hashCode__I($n(this.jl_StackTraceElement__f_declaringClass)) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_methodName))) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_fileName))) ^ this.jl_StackTraceElement__f_lineNumber) ^ this.jl_StackTraceElement__f_columnNumber)
});
function $as_jl_StackTraceElement(obj) {
  return (((obj instanceof $c_jl_StackTraceElement) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.StackTraceElement"))
}
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_StackTraceElement)))
}
function $asArrayOf_jl_StackTraceElement(obj, depth) {
  return (($isArrayOf_jl_StackTraceElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.StackTraceElement;", depth))
}
var $d_jl_StackTraceElement = new $TypeData().initClass({
  jl_StackTraceElement: 0
}, false, "java.lang.StackTraceElement", {
  jl_StackTraceElement: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StackTraceElement.prototype.$classData = $d_jl_StackTraceElement;
/** @constructor */
function $c_jl_String$() {
  /*<skip>*/
}
$c_jl_String$.prototype = new $h_O();
$c_jl_String$.prototype.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
  /*<skip>*/
}
$h_jl_String$.prototype = $c_jl_String$.prototype;
$c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > $n(value).u.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException())
  };
  var result = "";
  var i = offset;
  while ((i !== end)) {
    var $x_1 = result;
    var this$1 = $n(value).get(i);
    result = (("" + $x_1) + $as_T(String.fromCharCode(this$1)));
    i = ((1 + i) | 0)
  };
  return result
});
var $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_jsErrorForStackTrace = null;
    this.jl_Throwable__f_stackTrace = null
  };
  initCause__jl_Throwable__jl_Throwable(cause) {
    return this
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var $x_1 = this;
    var reference = (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.sjs_js_JavaScriptException__f_exception : $n($x_1));
    var identifyingString = Object.prototype.toString.call(reference);
    this.jl_Throwable__f_jsErrorForStackTrace = ((identifyingString === "[object Error]") ? reference : ((Error.captureStackTrace === (void 0)) ? new Error() : (Error.captureStackTrace(this), this)));
    return this
  };
  getStackTrace__Ajl_StackTraceElement() {
    if ((this.jl_Throwable__f_stackTrace === null)) {
      if (this.jl_Throwable__f_writableStackTrace) {
        this.jl_Throwable__f_stackTrace = $m_jl_StackTrace$().extract__O__Ajl_StackTraceElement(this.jl_Throwable__f_jsErrorForStackTrace)
      } else {
        this.jl_Throwable__f_stackTrace = new ($d_jl_StackTraceElement.getArrayOf().constr)(0)
      }
    };
    return this.jl_Throwable__f_stackTrace
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  get "name"() {
    return $objectClassName(this)
  };
  "toString"() {
    return this.toString__T()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
}
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
  /*<skip>*/
}
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
}
/** @constructor */
function $c_s_Array$() {
  /*<skip>*/
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
  /*<skip>*/
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  if ($n(srcClass).isArray__Z()) {
    var this$2 = $n(dest);
    var $x_1 = $n($objectGetClass(this$2)).isAssignableFrom__jl_Class__Z(srcClass)
  } else {
    var $x_1 = false
  };
  if ($x_1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length)
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
  }
});
$c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
  if ((xs === ys)) {
    return true
  };
  if (($n(xs).u.length !== $n(ys).u.length)) {
    return false
  };
  var len = $n(xs).u.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
var $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
  new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_err);
  new $c_s_util_DynamicVariable(null)
}
$c_s_Console$.prototype = new $h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
  /*<skip>*/
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v)
});
var $d_s_Console$ = new $TypeData().initClass({
  s_Console$: 0
}, false, "scala.Console$", {
  s_Console$: 1,
  O: 1,
  s_io_AnsiColor: 1
});
$c_s_Console$.prototype.$classData = $d_s_Console$;
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$()
  };
  return $n_s_Console$
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
  /*<skip>*/
}
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
  /*<skip>*/
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
$c_s_LowPriorityImplicits.prototype.wrapRefArray__AO__scm_ArraySeq$ofRef = (function(xs) {
  if ((xs === null)) {
    return null
  } else if (($n(xs).u.length === 0)) {
    var this$3 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$3.scm_ArraySeq$__f_EmptyArraySeq
  } else {
    return new $c_scm_ArraySeq$ofRef(xs)
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.isDefinedAt__O__Z(x) ? $thiz.apply__O__O(x) : $n(default$1).apply__O__O(x))
}
function $is_s_PartialFunction(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_PartialFunction)))
}
function $as_s_PartialFunction(obj) {
  return (($is_s_PartialFunction(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.PartialFunction"))
}
function $isArrayOf_s_PartialFunction(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_PartialFunction)))
}
function $asArrayOf_s_PartialFunction(obj, depth) {
  return (($isArrayOf_s_PartialFunction(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.PartialFunction;", depth))
}
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(elems))
  } else {
    var it = $n(elems).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      $thiz.addOne__O__scm_Growable($n(it).next__O())
    }
  };
  return $thiz
}
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_AbstractFunction3() {
  /*<skip>*/
}
$c_sr_AbstractFunction3.prototype = new $h_O();
$c_sr_AbstractFunction3.prototype.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
  /*<skip>*/
}
$h_sr_AbstractFunction3.prototype = $c_sr_AbstractFunction3.prototype;
$c_sr_AbstractFunction3.prototype.toString__T = (function() {
  return "<function3>"
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.sr_BooleanRef__f_elem = false;
  this.sr_BooleanRef__f_elem = elem
}
$c_sr_BooleanRef.prototype = new $h_O();
$c_sr_BooleanRef.prototype.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
  /*<skip>*/
}
$h_sr_BooleanRef.prototype = $c_sr_BooleanRef.prototype;
$c_sr_BooleanRef.prototype.toString__T = (function() {
  var b = this.sr_BooleanRef__f_elem;
  return ("" + b)
});
var $d_sr_BooleanRef = new $TypeData().initClass({
  sr_BooleanRef: 0
}, false, "scala.runtime.BooleanRef", {
  sr_BooleanRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_BooleanRef.prototype.$classData = $d_sr_BooleanRef;
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_s_package$().s_package$__f_Nil, this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  var this$1 = $m_Lcom_raquo_airstream_core_Observer$();
  var observer = this$1.withRecover__F1__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(onNext, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf, true);
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner)
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.isSafeToRemoveObserver__Z()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer)
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer)
    })))
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.isSafeToRemoveObserver__Z()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer)
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer)
    })))
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0)
}
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var value = $thiz.maybePendingObserverRemovals__sjs_js_$bar();
  if ((value === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$());
    $thiz.maybePendingObserverRemovals_$eq__sjs_js_$bar__V(newArray);
    return newArray
  } else {
    return value
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.onWillStart__V()
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.isSafeToRemoveObserver_$eq__Z__V(true);
  $thiz.maybePendingObserverRemovals_$eq__sjs_js_$bar__V((void 0))
}
function $is_Lcom_raquo_airstream_core_Observer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_Observer)))
}
function $as_Lcom_raquo_airstream_core_Observer(obj) {
  return (($is_Lcom_raquo_airstream_core_Observer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.Observer"))
}
function $isArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_Observer)))
}
function $asArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_Observer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.Observer;", depth))
}
function $f_Lcom_raquo_laminar_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, renderable) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode($n(renderable).asString__O__T(value))
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$2(outer) {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$2() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype = $c_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype;
var $d_Lcom_raquo_laminar_api_Laminar$$anon$2 = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$$anon$2: 0
}, false, "com.raquo.laminar.api.Laminar$$anon$2", {
  Lcom_raquo_laminar_api_Laminar$$anon$2: 1,
  O: 1,
  Lcom_raquo_laminar_defs_eventProps_GlobalEventProps: 1,
  Lcom_raquo_laminar_defs_eventProps_DocumentEventProps: 1
});
$c_Lcom_raquo_laminar_api_Laminar$$anon$2.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$$anon$2;
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$3(outer) {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$3;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$3() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype = $c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype;
var $d_Lcom_raquo_laminar_api_Laminar$$anon$3 = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$$anon$3: 0
}, false, "com.raquo.laminar.api.Laminar$$anon$3", {
  Lcom_raquo_laminar_api_Laminar$$anon$3: 1,
  O: 1,
  Lcom_raquo_laminar_defs_eventProps_GlobalEventProps: 1,
  Lcom_raquo_laminar_defs_eventProps_WindowEventProps: 1
});
$c_Lcom_raquo_laminar_api_Laminar$$anon$3.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$$anon$3;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor = null;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_callback = null;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_domCallback = null;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_options = null;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor = eventProcessor;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_callback = callback;
  this.Lcom_raquo_laminar_modifiers_EventListener__f_domCallback = ((arg1$2) => {
    this.com$raquo$laminar$modifiers$EventListener$$$anonfun$domCallback$1__Lorg_scalajs_dom_Event__V(arg1$2)
  });
  this.Lcom_raquo_laminar_modifiers_EventListener__f_options = (() => {
    var outer = null;
    outer = this;
    var this$1 = {};
    var prop = $n(outer).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
    var a = $n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture;
    this$1.capture = a;
    var prop$1 = $n(outer).Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
    var a$1 = $n(prop$1).Lcom_raquo_laminar_keys_EventProcessor__f_shouldBePassive;
    this$1.passive = a$1;
    return this$1
  })()
}
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype;
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  this.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_airstream_ownership_DynamicSubscription(element, false)
});
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.bind__Lcom_raquo_laminar_nodes_ReactiveElement__Z__Lcom_raquo_airstream_ownership_DynamicSubscription = (function(element, unsafePrepend) {
  var this$1 = $n(element);
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(this$1, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1(((ctx$2) => {
      var ctx = $as_Lcom_raquo_laminar_lifecycle_MountContext(ctx$2);
      var $x_1 = $m_Lcom_raquo_laminar_DomApi$();
      var this$3 = $n(element);
      $n($x_1).addEventListener__Lorg_scalajs_dom_Element__Lcom_raquo_laminar_modifiers_EventListener__V(this$3.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription($n(ctx).Lcom_raquo_laminar_lifecycle_MountContext__f_owner, new $c_sjsr_AnonFunction0((() => {
        var this$4 = $n(element);
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(this$4, this);
        if ((listenerIndex !== (-1))) {
          var this$5 = $n(element);
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(this$5, listenerIndex);
          var $x_2 = $m_Lcom_raquo_laminar_DomApi$();
          var this$6 = $n(element);
          $n($x_2).removeEventListener__Lorg_scalajs_dom_Element__Lcom_raquo_laminar_modifiers_EventListener__V(this$6.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref, this)
        }
      })))
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().unsafeBindPrependSubscription__Lcom_raquo_laminar_nodes_ReactiveElement__F1__Lcom_raquo_airstream_ownership_DynamicSubscription(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().unsafe__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
      var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
      return $as_Lcom_raquo_airstream_ownership_Subscription(subscribe.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))
    })), false));
    var this$8 = $n(element);
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(this$8, this, unsafePrepend);
    return sub
  } else {
    var activate = new $c_sjsr_AnonFunction1(((x$1$2) => {
      $as_Lcom_raquo_laminar_lifecycle_MountContext(x$1$2)
    }));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2$1) => {
      var owner$1 = $as_Lcom_raquo_airstream_ownership_Owner(owner$2$1);
      activate.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1))
    })), false)
  }
});
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.toString__T = (function() {
  var prop = this.Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  return (("EventListener(" + $n($n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_eventProp).Lcom_raquo_laminar_keys_EventProp__f_name) + ")")
});
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.com$raquo$laminar$modifiers$EventListener$$$anonfun$domCallback$1__Lorg_scalajs_dom_Event__V = (function(ev) {
  var prop = this.Lcom_raquo_laminar_modifiers_EventListener__f_eventProcessor;
  var processor = $n(prop).Lcom_raquo_laminar_keys_EventProcessor__f_processor;
  var this$2 = $n($as_s_Option($n(processor).apply__O__O(ev)));
  var f = this.Lcom_raquo_laminar_modifiers_EventListener__f_callback;
  if ((!this$2.isEmpty__Z())) {
    $n(f).apply__O__O(this$2.get__O())
  }
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_EventListener: 0
}, false, "com.raquo.laminar.modifiers.EventListener", {
  Lcom_raquo_laminar_modifiers_EventListener: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_Binder: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_modifiers_EventListener.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.Lcom_raquo_laminar_modifiers_KeySetter__f_key = null;
  this.Lcom_raquo_laminar_modifiers_KeySetter__f_value = null;
  this.Lcom_raquo_laminar_modifiers_KeySetter__f_action = null;
  this.Lcom_raquo_laminar_modifiers_KeySetter__f_key = key;
  this.Lcom_raquo_laminar_modifiers_KeySetter__f_value = value;
  this.Lcom_raquo_laminar_modifiers_KeySetter__f_action = action
}
$c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_KeySetter.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype;
$c_Lcom_raquo_laminar_modifiers_KeySetter.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  $n(this.Lcom_raquo_laminar_modifiers_KeySetter__f_action).apply__O__O__O__O(element, this.Lcom_raquo_laminar_modifiers_KeySetter__f_key, this.Lcom_raquo_laminar_modifiers_KeySetter__f_value)
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_KeySetter: 0
}, false, "com.raquo.laminar.modifiers.KeySetter", {
  Lcom_raquo_laminar_modifiers_KeySetter: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_Setter: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_modifiers_KeySetter.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Setter$$anon$1() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_modifiers_Setter$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_laminar_modifiers_Setter$$anon$1.prototype.constructor = $c_Lcom_raquo_laminar_modifiers_Setter$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Setter$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_modifiers_Setter$$anon$1.prototype = $c_Lcom_raquo_laminar_modifiers_Setter$$anon$1.prototype;
$c_Lcom_raquo_laminar_modifiers_Setter$$anon$1.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(element) {
  /*<skip>*/
});
var $d_Lcom_raquo_laminar_modifiers_Setter$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_modifiers_Setter$$anon$1: 0
}, false, "com.raquo.laminar.modifiers.Setter$$anon$1", {
  Lcom_raquo_laminar_modifiers_Setter$$anon$1: 1,
  O: 1,
  Lcom_raquo_laminar_modifiers_Setter: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_modifiers_Setter$$anon$1.prototype.$classData = $d_Lcom_raquo_laminar_modifiers_Setter$$anon$1;
function $is_Lcom_raquo_laminar_nodes_ChildNode(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ChildNode)))
}
function $as_Lcom_raquo_laminar_nodes_ChildNode(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ChildNode(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ChildNode"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ChildNode)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ChildNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ChildNode;", depth))
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_child = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner = null;
  this.Lcom_raquo_laminar_nodes_RootNode__f_child = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load")
  };
  if ((!$m_Lcom_raquo_laminar_DomApi$().isDescendantOf__Lorg_scalajs_dom_Node__Lorg_scalajs_dom_Node__Z(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering")
  };
  this.Lcom_raquo_laminar_nodes_RootNode__f_ref = container;
  this.mount__Z()
}
$c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $c_Lcom_raquo_laminar_nodes_RootNode.prototype;
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner = (function() {
  return this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner = x$1
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.mount__Z = (function() {
  $n(this.Lcom_raquo_laminar_nodes_RootNode__f_dynamicOwner).activate__V();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(this, this.Lcom_raquo_laminar_nodes_RootNode__f_child)
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_RootNode__f_ref
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_RootNode: 0
}, false, "com.raquo.laminar.nodes.RootNode", {
  Lcom_raquo_laminar_nodes_RootNode: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ParentNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1
});
$c_Lcom_raquo_laminar_nodes_RootNode.prototype.$classData = $d_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom($n(that).jl_Class__f_data))
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
$c_jl_Class.prototype.getComponentType__jl_Class = (function() {
  return $as_jl_Class(this.jl_Class__f_data.getComponentType())
});
$c_jl_Class.prototype.newArrayOfThisClass__O__O = (function(dimensions) {
  return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
});
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_Error extends $c_jl_Throwable {
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
/** @constructor */
function $c_s_$less$colon$less() {
  /*<skip>*/
}
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
  /*<skip>*/
}
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_Map = null;
  $n_s_Predef$ = this;
  $m_s_package$();
  $m_sci_List$();
  this.s_Predef$__f_Map = $m_sci_Map$()
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
  /*<skip>*/
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
var $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null
}
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  /*<skip>*/
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype;
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.from__sc_IterableOnce__O = (function(it) {
  var this$3 = $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate);
  $m_s_reflect_ManifestFactory$AnyManifest$();
  var n = $n(it).knownSize__I();
  if ((n > (-1))) {
    var elements = new $ac_O(n);
    var iterator = $n(it).iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      elements.set(i, $n(iterator).next__O());
      i = ((1 + i) | 0)
    };
    var $x_1 = elements
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var iterator$2 = $n(it).iterator__sc_Iterator();
    while ($n(iterator$2).hasNext__Z()) {
      var elem = $n(iterator$2).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    var $x_1 = new $ac_O(jsElems)
  };
  return this$3.make__O__scm_ArraySeq($x_1)
});
$c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.apply__sci_Seq__O = (function(elems) {
  var this$3 = $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate);
  $m_s_reflect_ManifestFactory$AnyManifest$();
  var n = $n(elems).knownSize__I();
  if ((n > (-1))) {
    var elements = new $ac_O(n);
    var iterator = $n(elems).iterator__sc_Iterator();
    var i = 0;
    while ((i < n)) {
      elements.set(i, $n(iterator).next__O());
      i = ((1 + i) | 0)
    };
    var $x_1 = elements
  } else {
    var capacity = 0;
    var jsElems = null;
    capacity = 0;
    jsElems = [];
    var iterator$2 = $n(elems).iterator__sc_Iterator();
    while ($n(iterator$2).hasNext__Z()) {
      var elem = $n(iterator$2).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem)
    };
    var $x_1 = new $ac_O(jsElems)
  };
  return this$3.make__O__scm_ArraySeq($x_1)
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.sc_IterableFactory$Delegate__f_delegate = null
}
$c_sc_IterableFactory$Delegate.prototype = new $h_O();
$c_sc_IterableFactory$Delegate.prototype.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
  /*<skip>*/
}
$h_sc_IterableFactory$Delegate.prototype = $c_sc_IterableFactory$Delegate.prototype;
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest))
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z())
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.sci_LazyList$State$Cons__f_head = null;
  this.sci_LazyList$State$Cons__f_tail = null;
  this.sci_LazyList$State$Cons__f_head = head;
  this.sci_LazyList$State$Cons__f_tail = tail
}
$c_sci_LazyList$State$Cons.prototype = new $h_O();
$c_sci_LazyList$State$Cons.prototype.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
  /*<skip>*/
}
$h_sci_LazyList$State$Cons.prototype = $c_sci_LazyList$State$Cons.prototype;
$c_sci_LazyList$State$Cons.prototype.head__O = (function() {
  return this.sci_LazyList$State$Cons__f_head
});
$c_sci_LazyList$State$Cons.prototype.tail__sci_LazyList = (function() {
  return this.sci_LazyList$State$Cons__f_tail
});
var $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$c_sci_LazyList$State$Empty$.prototype = new $h_O();
$c_sci_LazyList$State$Empty$.prototype.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$h_sci_LazyList$State$Empty$.prototype = $c_sci_LazyList$State$Empty$.prototype;
$c_sci_LazyList$State$Empty$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.tail__sci_LazyList = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
/** @constructor */
function $c_sci_Map$() {
  /*<skip>*/
}
$c_sci_Map$.prototype = new $h_O();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
  /*<skip>*/
}
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
var $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
/** @constructor */
function $c_sr_AbstractPartialFunction() {
  /*<skip>*/
}
$c_sr_AbstractPartialFunction.prototype = new $h_O();
$c_sr_AbstractPartialFunction.prototype.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
  /*<skip>*/
}
$h_sr_AbstractPartialFunction.prototype = $c_sr_AbstractPartialFunction.prototype;
$c_sr_AbstractPartialFunction.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sr_AbstractPartialFunction.prototype.apply__O__O = (function(x) {
  return this.applyOrElse__O__F1__O(x, $m_s_PartialFunction$().s_PartialFunction$__f_empty_pf)
});
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
/** @constructor */
function $c_sjsr_AnonFunction3(f) {
  this.sjsr_AnonFunction3__f_f = null;
  this.sjsr_AnonFunction3__f_f = f
}
$c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$c_sjsr_AnonFunction3.prototype.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
  /*<skip>*/
}
$h_sjsr_AnonFunction3.prototype = $c_sjsr_AnonFunction3.prototype;
$c_sjsr_AnonFunction3.prototype.apply__O__O__O__O = (function(arg1, arg2, arg3) {
  return (0, this.sjsr_AnonFunction3__f_f)(arg1, arg2, arg3)
});
var $d_sjsr_AnonFunction3 = new $TypeData().initClass({
  sjsr_AnonFunction3: 0
}, false, "scala.scalajs.runtime.AnonFunction3", {
  sjsr_AnonFunction3: 1,
  sr_AbstractFunction3: 1,
  O: 1,
  F3: 1
});
$c_sjsr_AnonFunction3.prototype.$classData = $d_sjsr_AnonFunction3;
function $as_s_util_control_ControlThrowable(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.control.ControlThrowable"))
}
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_control_ControlThrowable)))
}
function $asArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (($isArrayOf_s_util_control_ControlThrowable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.control.ControlThrowable;", depth))
}
/** @constructor */
function $c_Lapp_views_PaginaPrincipal$Libro(titulo, precio, imagen) {
  this.Lapp_views_PaginaPrincipal$Libro__f_titulo = null;
  this.Lapp_views_PaginaPrincipal$Libro__f_precio = null;
  this.Lapp_views_PaginaPrincipal$Libro__f_imagen = null;
  this.Lapp_views_PaginaPrincipal$Libro__f_titulo = titulo;
  this.Lapp_views_PaginaPrincipal$Libro__f_precio = precio;
  this.Lapp_views_PaginaPrincipal$Libro__f_imagen = imagen
}
$c_Lapp_views_PaginaPrincipal$Libro.prototype = new $h_O();
$c_Lapp_views_PaginaPrincipal$Libro.prototype.constructor = $c_Lapp_views_PaginaPrincipal$Libro;
/** @constructor */
function $h_Lapp_views_PaginaPrincipal$Libro() {
  /*<skip>*/
}
$h_Lapp_views_PaginaPrincipal$Libro.prototype = $c_Lapp_views_PaginaPrincipal$Libro.prototype;
$c_Lapp_views_PaginaPrincipal$Libro.prototype.productPrefix__T = (function() {
  return "Libro"
});
$c_Lapp_views_PaginaPrincipal$Libro.prototype.productArity__I = (function() {
  return 3
});
$c_Lapp_views_PaginaPrincipal$Libro.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.Lapp_views_PaginaPrincipal$Libro__f_titulo;
      break
    }
    case 1: {
      return this.Lapp_views_PaginaPrincipal$Libro__f_precio;
      break
    }
    case 2: {
      return this.Lapp_views_PaginaPrincipal$Libro__f_imagen;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_Lapp_views_PaginaPrincipal$Libro.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_Lapp_views_PaginaPrincipal$Libro.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lapp_views_PaginaPrincipal$Libro.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lapp_views_PaginaPrincipal$Libro.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_Lapp_views_PaginaPrincipal$Libro)) {
    var Libro$1 = $as_Lapp_views_PaginaPrincipal$Libro(x$1);
    return (((this.Lapp_views_PaginaPrincipal$Libro__f_titulo === $n(Libro$1).Lapp_views_PaginaPrincipal$Libro__f_titulo) && (this.Lapp_views_PaginaPrincipal$Libro__f_precio === $n(Libro$1).Lapp_views_PaginaPrincipal$Libro__f_precio)) && ((this.Lapp_views_PaginaPrincipal$Libro__f_imagen === $n(Libro$1).Lapp_views_PaginaPrincipal$Libro__f_imagen) && ($n(Libro$1), true)))
  } else {
    return false
  }
});
function $as_Lapp_views_PaginaPrincipal$Libro(obj) {
  return (((obj instanceof $c_Lapp_views_PaginaPrincipal$Libro) || (obj === null)) ? obj : $throwClassCastException(obj, "app.views.PaginaPrincipal$Libro"))
}
function $isArrayOf_Lapp_views_PaginaPrincipal$Libro(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lapp_views_PaginaPrincipal$Libro)))
}
function $asArrayOf_Lapp_views_PaginaPrincipal$Libro(obj, depth) {
  return (($isArrayOf_Lapp_views_PaginaPrincipal$Libro(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lapp.views.PaginaPrincipal$Libro;", depth))
}
var $d_Lapp_views_PaginaPrincipal$Libro = new $TypeData().initClass({
  Lapp_views_PaginaPrincipal$Libro: 0
}, false, "app.views.PaginaPrincipal$Libro", {
  Lapp_views_PaginaPrincipal$Libro: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lapp_views_PaginaPrincipal$Libro.prototype.$classData = $d_Lapp_views_PaginaPrincipal$Libro;
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$1(onNextParam$1, handleObserverErrors$1, onErrorParam$1) {
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onNextParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_handleObserverErrors$1 = false;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onNextParam$1 = onNextParam$1;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_handleObserverErrors$1 = handleObserverErrors$1;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1 = onErrorParam$1;
  this.Lcom_raquo_airstream_core_Observer$$anon$1__f_maybeDisplayName = (void 0)
}
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$1() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Observer$$anon$1.prototype = $c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype;
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_core_Observer$$anon$1__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.onNext__O__V = (function(nextValue) {
  try {
    $n(this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onNextParam$1).apply__O__O(nextValue)
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.Lcom_raquo_airstream_core_Observer$$anon$1__f_handleObserverErrors$1) {
      this.onError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2))
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2))
    }
  }
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.onError__jl_Throwable__V = (function(error) {
  try {
    if ($n(this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1).isDefinedAt__O__Z(error)) {
      $n(this.Lcom_raquo_airstream_core_Observer$$anon$1__f_onErrorParam$1).apply__O__O(error)
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(error)
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error))
  }
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.onTry__s_util_Try__V = (function(nextValue) {
  $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((error$2) => {
    var error = $as_jl_Throwable(error$2);
    this.onError__jl_Throwable__V(error)
  })), new $c_sjsr_AnonFunction1(((nextValue$2$2) => {
    this.onNext__O__V(nextValue$2$2)
  })))
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$1 = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Observer$$anon$1: 0
}, false, "com.raquo.airstream.core.Observer$$anon$1", {
  Lcom_raquo_airstream_core_Observer$$anon$1: 1,
  O: 1,
  Lcom_raquo_airstream_core_Observer: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1
});
$c_Lcom_raquo_airstream_core_Observer$$anon$1.prototype.$classData = $d_Lcom_raquo_airstream_core_Observer$$anon$1;
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$2(onTryParam$1, handleObserverErrors$2) {
  this.Lcom_raquo_airstream_core_Observer$$anon$2__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$2__f_onTryParam$1 = null;
  this.Lcom_raquo_airstream_core_Observer$$anon$2__f_handleObserverErrors$2 = false;
  this.Lcom_raquo_airstream_core_Observer$$anon$2__f_onTryParam$1 = onTryParam$1;
  this.Lcom_raquo_airstream_core_Observer$$anon$2__f_handleObserverErrors$2 = handleObserverErrors$2;
  this.Lcom_raquo_airstream_core_Observer$$anon$2__f_maybeDisplayName = (void 0)
}
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype = new $h_O();
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$2() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_core_Observer$$anon$2.prototype = $c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype;
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_core_Observer$$anon$2__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype.onNext__O__V = (function(nextValue) {
  this.onTry__s_util_Try__V(new $c_s_util_Success(nextValue))
});
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype.onError__jl_Throwable__V = (function(error) {
  this.onTry__s_util_Try__V(new $c_s_util_Failure(error))
});
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype.onTry__s_util_Try__V = (function(nextValue) {
  try {
    if ($n(this.Lcom_raquo_airstream_core_Observer$$anon$2__f_onTryParam$1).isDefinedAt__O__Z(nextValue)) {
      $n(this.Lcom_raquo_airstream_core_Observer$$anon$2__f_onTryParam$1).apply__O__O(nextValue)
    } else {
      $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((err$2) => {
        var err = $as_jl_Throwable(err$2);
        $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(err)
      })), new $c_sjsr_AnonFunction1(((x$2$2) => (void 0))))
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.Lcom_raquo_airstream_core_Observer$$anon$2__f_handleObserverErrors$2 && $n(nextValue).isSuccess__Z())) {
      this.onError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2))
    } else {
      $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((originalError$2) => {
        var originalError = $as_jl_Throwable(originalError$2);
        $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError))
      })), new $c_sjsr_AnonFunction1(((x$3$2) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2))
      })))
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$2 = new $TypeData().initClass({
  Lcom_raquo_airstream_core_Observer$$anon$2: 0
}, false, "com.raquo.airstream.core.Observer$$anon$2", {
  Lcom_raquo_airstream_core_Observer$$anon$2: 1,
  O: 1,
  Lcom_raquo_airstream_core_Observer: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1
});
$c_Lcom_raquo_airstream_core_Observer$$anon$2.prototype.$classData = $d_Lcom_raquo_airstream_core_Observer$$anon$2;
function $p_Lcom_raquo_laminar_api_Laminar$svg$__svg$lzycompute__Lcom_raquo_laminar_tags_SvgTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_Laminar$svg$__f_bitmap$3;
  var hi = (32768 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_Laminar$svg$__f_svg = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_Laminar$svg$__f_bitmap$3;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (32768 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_Laminar$svg$__f_bitmap$3 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_Laminar$svg$__f_svg
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.Lcom_raquo_laminar_api_Laminar$svg$__f_className = null;
  this.Lcom_raquo_laminar_api_Laminar$svg$__f_svg = null;
  this.Lcom_raquo_laminar_api_Laminar$svg$__f_bitmap$3 = $L0;
  if ((outer === null)) {
    $n(null)
  };
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this)
}
$c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_Laminar$svg$.prototype.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype;
$c_Lcom_raquo_laminar_api_Laminar$svg$.prototype.svg__Lcom_raquo_laminar_tags_SvgTag = (function() {
  var b = this.Lcom_raquo_laminar_api_Laminar$svg$__f_bitmap$3;
  var hi = (32768 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_Laminar$svg$__svg$lzycompute__Lcom_raquo_laminar_tags_SvgTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_Laminar$svg$__f_svg
  }
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().initClass({
  Lcom_raquo_laminar_api_Laminar$svg$: 0
}, false, "com.raquo.laminar.api.Laminar$svg$", {
  Lcom_raquo_laminar_api_Laminar$svg$: 1,
  O: 1,
  Lcom_raquo_laminar_defs_tags_SvgTags: 1,
  Lcom_raquo_laminar_defs_attrs_SvgAttrs: 1,
  Lcom_raquo_laminar_defs_complex_ComplexSvgKeys: 1
});
$c_Lcom_raquo_laminar_api_Laminar$svg$.prototype.$classData = $d_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.Lcom_raquo_laminar_api_package$__f_L = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.Lcom_raquo_laminar_api_package$__f_L = new $c_Lcom_raquo_laminar_api_package$$anon$2()
}
$c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_package$.prototype.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_package$.prototype = $c_Lcom_raquo_laminar_api_package$.prototype;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().initClass({
  Lcom_raquo_laminar_api_package$: 0
}, false, "com.raquo.laminar.api.package$", {
  Lcom_raquo_laminar_api_package$: 1,
  O: 1,
  Lcom_raquo_laminar_Implicits: 1,
  Lcom_raquo_laminar_Implicits$LowPriorityImplicits: 1,
  Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers: 1
});
$c_Lcom_raquo_laminar_api_package$.prototype.$classData = $d_Lcom_raquo_laminar_api_package$;
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$()
  };
  return $n_Lcom_raquo_laminar_api_package$
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.Lcom_raquo_laminar_nodes_CommentNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = $m_s_None$();
  this.Lcom_raquo_laminar_nodes_CommentNode__f_ref = $m_Lcom_raquo_laminar_DomApi$().createCommentNode__T__Lorg_scalajs_dom_Comment(initialText)
}
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype;
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = maybeNextParent
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
  /*<skip>*/
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this)
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  return this.Lcom_raquo_laminar_nodes_CommentNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_CommentNode__f_ref
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_CommentNode: 0
}, false, "com.raquo.laminar.nodes.CommentNode", {
  Lcom_raquo_laminar_nodes_CommentNode: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_nodes_CommentNode.prototype.$classData = $d_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.Lcom_raquo_laminar_nodes_TextNode__f_ref = null;
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = $m_s_None$();
  this.Lcom_raquo_laminar_nodes_TextNode__f_ref = $m_Lcom_raquo_laminar_DomApi$().createTextNode__T__Lorg_scalajs_dom_Text(initialText)
}
$c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $c_Lcom_raquo_laminar_nodes_TextNode.prototype;
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = maybeNextParent
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
  /*<skip>*/
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this)
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  return this.Lcom_raquo_laminar_nodes_TextNode__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.text__T = (function() {
  return $as_T(this.Lcom_raquo_laminar_nodes_TextNode__f_ref.data)
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_TextNode__f_ref
});
function $as_Lcom_raquo_laminar_nodes_TextNode(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_nodes_TextNode) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.TextNode"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_TextNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_TextNode)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_TextNode(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_TextNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.TextNode;", depth))
}
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_TextNode: 0
}, false, "com.raquo.laminar.nodes.TextNode", {
  Lcom_raquo_laminar_nodes_TextNode: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1
});
$c_Lcom_raquo_laminar_nodes_TextNode.prototype.$classData = $d_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $c_Ljava_io_OutputStream() {
  /*<skip>*/
}
$c_Ljava_io_OutputStream.prototype = new $h_O();
$c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
  /*<skip>*/
}
$h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($n($as_jl_Character(that)));
    return ($thiz === this$1)
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  return $as_T(String.fromCharCode($thiz))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $as_jl_InterruptedException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.InterruptedException"))
}
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_InterruptedException)))
}
function $asArrayOf_jl_InterruptedException(obj, depth) {
  return (($isArrayOf_jl_InterruptedException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.InterruptedException;", depth))
}
function $as_jl_LinkageError(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.LinkageError"))
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_LinkageError)))
}
function $asArrayOf_jl_LinkageError(obj, depth) {
  return (($isArrayOf_jl_LinkageError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.LinkageError;", depth))
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.append__AC__jl_StringBuilder = (function(str) {
  var this$1 = $m_jl_String$();
  var count = $n(str).u.length;
  var str$1 = this$1.new__AC__I__I__T(str, 0, count);
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
  return this
});
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index)
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
function $as_jl_ThreadDeath(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ThreadDeath"))
}
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ThreadDeath)))
}
function $asArrayOf_jl_ThreadDeath(obj, depth) {
  return (($isArrayOf_jl_ThreadDeath(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ThreadDeath;", depth))
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $as_jl_VirtualMachineError(obj) {
  return (((obj instanceof $c_jl_VirtualMachineError) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.VirtualMachineError"))
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_VirtualMachineError)))
}
function $asArrayOf_jl_VirtualMachineError(obj, depth) {
  return (($isArrayOf_jl_VirtualMachineError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.VirtualMachineError;", depth))
}
/** @constructor */
function $c_s_$eq$colon$eq() {
  /*<skip>*/
}
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
  /*<skip>*/
}
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
  new $c_sjsr_AnonFunction1(((x$2) => $m_s_None$()))
}
$c_s_PartialFunction$$anon$1.prototype = new $h_O();
$c_s_PartialFunction$$anon$1.prototype.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
  /*<skip>*/
}
$h_s_PartialFunction$$anon$1.prototype = $c_s_PartialFunction$$anon$1.prototype;
$c_s_PartialFunction$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
});
$c_s_PartialFunction$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_s_PartialFunction$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return false
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__E = (function(x) {
  throw new $c_s_MatchError(x)
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__E(v1)
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().initClass({
  s_PartialFunction$$anon$1: 0
}, false, "scala.PartialFunction$$anon$1", {
  s_PartialFunction$$anon$1: 1,
  O: 1,
  s_PartialFunction: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_PartialFunction$$anon$1.prototype.$classData = $d_s_PartialFunction$$anon$1;
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1))
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1)
});
/** @constructor */
function $c_sc_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
}
$c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
  /*<skip>*/
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__sc_SeqOps = (function(elems) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).apply__sci_Seq__O(elems))
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it))
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source)
});
$c_sc_SeqFactory$Delegate.prototype.apply__sci_Seq__O = (function(elems) {
  return this.apply__sci_Seq__sc_SeqOps(elems)
});
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.lengthCompare__I__I(idx) > 0))
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    var knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
/** @constructor */
function $c_sci_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
}
$c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
/** @constructor */
function $c_sci_LazyList$() {
  this.sci_LazyList$__f__empty = null;
  $n_sci_LazyList$ = this;
  var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$()));
  this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
  new $c_sjsr_AnonFunction1(((x$10$2) => $m_sr_Statics$PFMarker$()))
}
$c_sci_LazyList$.prototype = new $h_O();
$c_sci_LazyList$.prototype.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
  /*<skip>*/
}
$h_sci_LazyList$.prototype = $c_sci_LazyList$.prototype;
$c_sci_LazyList$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_LazyList(elems)
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList = (function(ll, n) {
  var restRef = new $c_sr_ObjectRef(ll);
  var iRef = new $c_sr_IntRef(n);
  var state = new $c_sjsr_AnonFunction0((() => {
    var rest = $as_sci_LazyList(restRef.sr_ObjectRef__f_elem);
    var i = iRef.sr_IntRef__f_elem;
    while (((i > 0) && (!$n(rest).isEmpty__Z()))) {
      var this$4 = $n(rest);
      rest = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest;
      i = (((-1) + i) | 0);
      iRef.sr_IntRef__f_elem = i
    };
    return $n(rest).scala$collection$immutable$LazyList$$state__sci_LazyList$State()
  }));
  return new $c_sci_LazyList(state)
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__sci_LazyList = (function(coll) {
  if ((coll instanceof $c_sci_LazyList)) {
    var x2 = $as_sci_LazyList(coll);
    return x2
  } else if (($n(coll).knownSize__I() === 0)) {
    return this.sci_LazyList$__f__empty
  } else {
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State($n(coll).iterator__sc_Iterator())));
    return new $c_sci_LazyList(state)
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State = (function(it) {
  if ($n(it).hasNext__Z()) {
    var hd = $n(it).next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl)
  } else {
    return $m_sci_LazyList$State$Empty$()
  }
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_LazyList(source)
});
var $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
/** @constructor */
function $c_s_util_Try() {
  /*<skip>*/
}
$c_s_util_Try.prototype = new $h_O();
$c_s_util_Try.prototype.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
  /*<skip>*/
}
$h_s_util_Try.prototype = $c_s_util_Try.prototype;
function $as_s_util_Try(obj) {
  return (((obj instanceof $c_s_util_Try) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Try"))
}
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Try)))
}
function $asArrayOf_s_util_Try(obj, depth) {
  return (($isArrayOf_s_util_Try(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Try;", depth))
}
function $is_Lcom_raquo_airstream_core_SyncObservable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_airstream_core_SyncObservable)))
}
function $as_Lcom_raquo_airstream_core_SyncObservable(obj) {
  return (($is_Lcom_raquo_airstream_core_SyncObservable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.SyncObservable"))
}
function $isArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_SyncObservable)))
}
function $asArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_SyncObservable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.SyncObservable;", depth))
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$1 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = ((1 + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
  try {
    $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $n(observer).onTry__s_util_Try__V($thiz.tryNow__s_util_Try());
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    var result = subscription
  } finally {
    this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level = (((-1) + this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level) | 0);
    if ((this$1.Lcom_raquo_airstream_core_Transaction$onStart$__f_level === 0)) {
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$1)
    }
  };
  return result
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer)
  })));
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  this$.push(observer);
  return subscription
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
    $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V($thiz)
  };
  var this$ = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  this$.push(observer);
  $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz)
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  var removed = $m_Lcom_raquo_airstream_core_ObserverList$().removeObserverNow$extension__Lcom_raquo_ew_JsArray__O__Z($thiz.internalObservers__Lcom_raquo_ew_JsArray(), observer);
  if (removed) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz)
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  var removed = $m_Lcom_raquo_airstream_core_ObserverList$().removeObserverNow$extension__Lcom_raquo_ew_JsArray__O__Z($thiz.externalObservers__Lcom_raquo_ew_JsArray(), observer);
  if (removed) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz)
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  var isStarting = ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1);
  if (isStarting) {
    $thiz.onStart__V()
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.onStop__V()
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  var $x_1 = $uI(this$.length);
  var this$$1 = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  return (($x_1 + $uI(this$$1.length)) | 0)
}
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V($m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$()));
  $thiz.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V($m_Lcom_raquo_ew_JsArray$().apply__sci_Seq__Lcom_raquo_ew_JsArray($m_sci_Nil$()))
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $n($thiz.Lcom_raquo_airstream_state_SourceVar__f_writer).onTry__s_util_Try__V(tryValue)
}
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.Lcom_raquo_airstream_state_SourceVar__f_writer = $m_Lcom_raquo_airstream_core_Observer$().fromTry__s_PartialFunction__Z__Lcom_raquo_airstream_core_Observer(new $c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true))
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1(outer) {
  this.Lcom_raquo_airstream_state_Var$$anonfun$writer$1__f_$outer = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.Lcom_raquo_airstream_state_Var$$anonfun$writer$1__f_$outer = outer
  }
}
$c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype = new $h_sr_AbstractPartialFunction();
$c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype.constructor = $c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anonfun$writer$1() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype = $c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype;
$c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype.applyOrElse__s_util_Try__F1__O = (function(x1, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_Lcom_raquo_airstream_core_Transaction(x$1$2);
    $n(this.Lcom_raquo_airstream_state_Var$$anonfun$writer$1__f_$outer).setCurrentValue__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(x1, x$1)
  })))
});
$c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype.isDefinedAt__s_util_Try__Z = (function(x1) {
  return true
});
$c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__s_util_Try__Z($as_s_util_Try(x))
});
$c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__s_util_Try__F1__O($as_s_util_Try(x), default$1)
});
var $d_Lcom_raquo_airstream_state_Var$$anonfun$writer$1 = new $TypeData().initClass({
  Lcom_raquo_airstream_state_Var$$anonfun$writer$1: 0
}, false, "com.raquo.airstream.state.Var$$anonfun$writer$1", {
  Lcom_raquo_airstream_state_Var$$anonfun$writer$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lcom_raquo_airstream_state_Var$$anonfun$writer$1.prototype.$classData = $d_Lcom_raquo_airstream_state_Var$$anonfun$writer$1;
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1() {
  /*<skip>*/
}
$c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1.prototype = new $h_sr_AbstractPartialFunction();
$c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1.prototype.constructor = $c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1.prototype = $c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1.prototype;
$c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1.prototype.applyOrElse__O__F1__O = (function(x1, default$1) {
  if (((typeof x1) === "string")) {
    var x2 = $as_T(x1);
    return x2
  } else {
    return $n(default$1).apply__O__O(x1)
  }
});
$c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1.prototype.isDefinedAt__O__Z = (function(x1) {
  return ((typeof x1) === "string")
});
var $d_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1 = new $TypeData().initClass({
  Lcom_raquo_laminar_DomApi$$anonfun$getValue$1: 0
}, false, "com.raquo.laminar.DomApi$$anonfun$getValue$1", {
  Lcom_raquo_laminar_DomApi$$anonfun$getValue$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
$c_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1.prototype.$classData = $d_Lcom_raquo_laminar_DomApi$$anonfun$getValue$1;
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  var value = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
  if ((value === (void 0))) {
    var a = [listener];
    $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners = a
  } else if (unsafePrepend) {
    var value$1 = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
    if ((value$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get")
    } else {
      var $x_1 = value$1
    };
    $x_1.unshift(listener)
  } else {
    var value$2 = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
    if ((value$2 === (void 0))) {
      var $x_2;
      throw new $c_ju_NoSuchElementException("undefined.get")
    } else {
      var $x_2 = value$2
    };
    $x_2.push(listener)
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var value = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
  if ((value !== (void 0))) {
    value.splice(index, 1)
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var value = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners;
  if ((value === (void 0))) {
    return (-1)
  } else {
    var found = false;
    var ix = 0;
    while (((!found) && (ix < $uI(value.length)))) {
      var x = value[ix];
      if (((x === null) ? (listener === null) : $dp_equals__O__Z($n(x), listener))) {
        found = true
      } else {
        ix = ((1 + ix) | 0)
      }
    };
    return (found ? ix : (-1))
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent)
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent;
  $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent)
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var this$1 = $n(maybePrevParent);
  if ((!this$1.isEmpty__Z())) {
    var arg1 = this$1.get__O();
    var x$4 = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
    var this$2 = $n($n(x$4).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
    var this$3 = $n(this$2.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
    var isPrevParentActive = (!this$3.isEmpty__Z())
  } else {
    var isPrevParentActive = false
  };
  var this$4 = $n(maybeNextParent);
  if ((!this$4.isEmpty__Z())) {
    var arg1$1 = this$4.get__O();
    var x$5 = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1$1);
    var this$5 = $n($n(x$5).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner());
    var this$6 = $n(this$5.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
    var isNextParentActive = (!this$6.isEmpty__Z())
  } else {
    var isNextParentActive = false
  };
  return (isPrevParentActive && (!isNextParentActive))
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  var this$1 = $n(maybeNextParent);
  if (this$1.isEmpty__Z()) {
    var maybeNextOwner = $m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var x$6 = $as_Lcom_raquo_laminar_nodes_ParentNode(arg1);
    var maybeNextOwner = new $c_s_Some($n(x$6).dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner())
  };
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner)
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  var this$1 = $n(maybeNextOwner);
  if (this$1.isEmpty__Z()) {
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription).clearOwner__V()
  } else {
    var arg1 = this$1.get__O();
    var nextOwner = $as_Lcom_raquo_airstream_ownership_DynamicOwner(arg1);
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription).setOwner__Lcom_raquo_airstream_ownership_DynamicOwner__V(nextOwner)
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0((() => {
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner).activate__V()
  })), new $c_sjsr_AnonFunction0((() => {
    $n($thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner).deactivate__V()
  })));
  $thiz.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners = (void 0);
  $n($m_s_Predef$().s_Predef$__f_Map)
}
function $is_Lcom_raquo_laminar_nodes_ReactiveElement(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lcom_raquo_laminar_nodes_ReactiveElement)))
}
function $as_Lcom_raquo_laminar_nodes_ReactiveElement(obj) {
  return (($is_Lcom_raquo_laminar_nodes_ReactiveElement(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveElement"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveElement)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveElement;", depth))
}
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
  /*<skip>*/
}
$c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
  /*<skip>*/
}
$h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayStoreException = new $TypeData().initClass({
  jl_ArrayStoreException: 0
}, false, "java.lang.ArrayStoreException", {
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayStoreException.prototype.$classData = $d_jl_ArrayStoreException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", {
  jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
});
$c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream$DummyOutputStream;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint"
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $n($objectGetClass(this$1)).getName__T())
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$())
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1)
});
$c_s_Option.prototype.contains__O__Z = (function(elem) {
  return ((!this.isEmpty__Z()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.get__O(), elem))
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    $m_sc_Iterator$();
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a)
  }
});
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"))
}
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)))
}
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth))
}
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, $n(Tuple2$1).T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, $n(Tuple2$1).T2__f__2))
  } else {
    return false
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate)
}
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
  /*<skip>*/
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass({
  sc_ClassTagSeqFactory$AnySeqDelegate: 0
}, false, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", {
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
});
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.$classData = $d_sc_ClassTagSeqFactory$AnySeqDelegate;
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth))
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator")
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed)
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this)
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0)
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1)
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that)
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
  /*<skip>*/
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1)
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize)
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z())
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O()
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo)
  } else if ((until <= lo)) {
    var rest = 0
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0)
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that)
  };
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_dropping = ((sum < 0) ? 2147483647 : sum);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass({
  sc_Iterator$SliceIterator: 0
}, false, "scala.collection.Iterator$SliceIterator", {
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$SliceIterator.prototype.$classData = $d_sc_Iterator$SliceIterator;
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $as_sc_LinearSeq($thiz);
  var len = 0;
  while (true) {
    var this$1 = $n(these);
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq($n(these).tail__O())
    } else {
      break
    }
  };
  return len
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.lengthCompare__I__I(x) > 0))
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return $n(skipped).head__O()
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeq($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z())
      } else {
        var $x_1 = false
      };
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z())
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
  /*<skip>*/
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z())
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
  while (true) {
    if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
      $m_sc_StringOps$();
      $m_sc_StringOps$();
      var this$ = $thiz.sc_StringOps$$anon$1__f_$this$2;
      var i = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
      var this$2 = $n(this$);
      var c = $charAt(this$2, i);
      var $x_1 = (!((c === 13) || (c === 10)))
    } else {
      var $x_1 = false
    };
    if ($x_1) {
      $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0)
    } else {
      break
    }
  };
  var end = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
  if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
    $m_sc_StringOps$();
    var this$$2 = $thiz.sc_StringOps$$anon$1__f_$this$2;
    var i$1 = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
    var this$5 = $n(this$$2);
    var c$1 = $charAt(this$5, i$1);
    $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0);
    if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
      $m_sc_StringOps$();
      $m_sc_StringOps$();
      var this$$3 = $thiz.sc_StringOps$$anon$1__f_$this$2;
      var i$2 = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
      var this$7 = $n(this$$3);
      var c$2 = $charAt(this$7, i$2);
      var $x_2 = ((c$1 === 13) && (c$2 === 10))
    } else {
      var $x_2 = false
    };
    if ($x_2) {
      $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0)
    };
    if ((!$thiz.sc_StringOps$$anon$1__f_stripped$1)) {
      end = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index
    }
  };
  var this$9 = $n($thiz.sc_StringOps$$anon$1__f_$this$2);
  var endIndex = end;
  if ((start < 0)) {
    $charAt(this$9, start)
  };
  if ((endIndex > this$9.length)) {
    $charAt(this$9, endIndex)
  };
  if ((endIndex < start)) {
    $charAt(this$9, (-1))
  };
  return $as_T(this$9.substring(start, endIndex))
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len = 0;
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = 0;
  this.sc_StringOps$$anon$1__f_$this$2 = null;
  this.sc_StringOps$$anon$1__f_stripped$1 = false;
  this.sc_StringOps$$anon$1__f_$this$2 = \u03b4this$2;
  this.sc_StringOps$$anon$1__f_stripped$1 = stripped$1;
  var this$1 = $n(\u03b4this$2);
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len = this$1.length;
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = 0
}
$c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StringOps$$anon$1.prototype.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
  /*<skip>*/
}
$h_sc_StringOps$$anon$1.prototype = $c_sc_StringOps$$anon$1.prototype;
$c_sc_StringOps$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)
});
$c_sc_StringOps$$anon$1.prototype.next__T = (function() {
  return ((this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index >= this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len) ? $as_T($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()) : $p_sc_StringOps$$anon$1__advance__T(this))
});
$c_sc_StringOps$$anon$1.prototype.next__O = (function() {
  return this.next__T()
});
var $d_sc_StringOps$$anon$1 = new $TypeData().initClass({
  sc_StringOps$$anon$1: 0
}, false, "scala.collection.StringOps$$anon$1", {
  sc_StringOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StringOps$$anon$1.prototype.$classData = $d_sc_StringOps$$anon$1;
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sci_IndexedSeq = (function(it) {
  if ($is_sci_IndexedSeq(it)) {
    var x2 = $as_sci_IndexedSeq(it);
    return x2
  } else {
    return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(source)
});
$c_sci_IndexedSeq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_IndexedSeq(it)
});
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.sci_LazyList$LazyIterator__f_lazyList = null;
  this.sci_LazyList$LazyIterator__f_lazyList = lazyList
}
$c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_LazyList$LazyIterator.prototype.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
  /*<skip>*/
}
$h_sci_LazyList$LazyIterator.prototype = $c_sci_LazyList$LazyIterator.prototype;
$c_sci_LazyList$LazyIterator.prototype.hasNext__Z = (function() {
  return (!$n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z())
});
$c_sci_LazyList$LazyIterator.prototype.next__O = (function() {
  if ($n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z()) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    var this$1 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    var res = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    var this$2 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    this.sci_LazyList$LazyIterator__f_lazyList = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    return res
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$());
  new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.apply__sci_Seq__O = (function(elems) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)
});
$c_sci_List$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source)
});
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
/** @constructor */
function $c_sci_Seq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
}
$c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
$c_sci_Seq$.prototype.from__sc_IterableOnce__sci_Seq = (function(it) {
  if ($is_sci_Seq(it)) {
    var x2 = $as_sci_Seq(it);
    return x2
  } else {
    return $as_sci_Seq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
  }
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Seq(source)
});
$c_sci_Seq$.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return this.from__sc_IterableOnce__sci_Seq(it)
});
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $p_sci_Vector$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 250
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sci_Vector(elems)
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(it);
    return x2
  } else {
    var knownSize = $n(it).knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$()
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if (false) {
          var x2$2 = $as_sci_ArraySeq$ofRef(it);
          var x = $n($n(x2$2).elemTag__s_reflect_ClassTag()).runtimeClass__jl_Class();
          if ((x !== null)) {
            var this$1 = $n(x);
            var $x_1 = (this$1 === $d_O.getClassOf())
          } else {
            var $x_1 = false
          };
          if ($x_1) {
            var a1$3 = $n(x2$2).unsafeArray__AO();
            break matchEnd5
          }
        };
        if ($is_sci_Iterable(it)) {
          var x3 = $as_sci_Iterable(it);
          var a1 = new $ac_O(knownSize);
          var this$2 = $n(x3);
          this$2.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5
        };
        var a1$2 = new $ac_O(knownSize);
        var this$3 = $n($n(it).iterator__sc_Iterator());
        this$3.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2
      };
      return new $c_sci_Vector1(a1$3)
    } else {
      var this$4 = new $c_sci_VectorBuilder();
      var this$5 = $n(this$4.addAll__sc_IterableOnce__sci_VectorBuilder(it));
      return this$5.result__sci_Vector()
    }
  }
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source)
});
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.sci_VectorBuilder__f_depth >= 6)) {
    a = $thiz.sci_VectorBuilder__f_a6;
    var i = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      $systemArraycopyRefs($n(src), i, $n(dest), 0, length)
    };
    var newOffset = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 33554432) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset) | 0)) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset;
    if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0) === 0)) {
      $thiz.sci_VectorBuilder__f_depth = 5
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 5)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a5
    };
    var i$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 20) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        $systemArraycopyRefs($n(src$1), i$2, $n(dest$1), 0, length$1)
      };
      $thiz.sci_VectorBuilder__f_a5 = $asArrayOf_O(a, 5);
      var newOffset$1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1048576) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$1) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$1;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 4
      }
    } else {
      if ((i$2 > 0)) {
        var original = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, i$2, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 4)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a4
    };
    var i$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 15) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        $systemArraycopyRefs($n(src$2), i$3, $n(dest$2), 0, length$2)
      };
      $thiz.sci_VectorBuilder__f_a4 = $asArrayOf_O(a, 4);
      var newOffset$2 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32768) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$2) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$2;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 3
      }
    } else {
      if ((i$3 > 0)) {
        var original$1 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, i$3, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 3)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a3
    };
    var i$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 10) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        $systemArraycopyRefs($n(src$3), i$4, $n(dest$3), 0, length$3)
      };
      $thiz.sci_VectorBuilder__f_a3 = $asArrayOf_O(a, 3);
      var newOffset$3 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1024) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$3) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$3;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 2
      }
    } else {
      if ((i$4 > 0)) {
        var original$2 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, i$4, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 2)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a2
    };
    var i$5 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 5) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        $systemArraycopyRefs($n(src$4), i$5, $n(dest$4), 0, length$4)
      };
      $thiz.sci_VectorBuilder__f_a2 = $asArrayOf_O(a, 2);
      var newOffset$4 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$4) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$4;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 1
      }
    } else {
      if ((i$5 > 0)) {
        var original$3 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, i$5, 32)
      };
      $n(aParent).set(0, a)
    };
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1)
  };
  if (($thiz.sci_VectorBuilder__f_depth >= 1)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a1
    };
    var i$6 = (31 & $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset);
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        $systemArraycopyRefs($n(src$5), i$6, $n(dest$5), 0, length$5)
      };
      $thiz.sci_VectorBuilder__f_a1 = a;
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0
    } else {
      if ((i$6 > 0)) {
        var original$4 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, i$6, 32)
      };
      $n(aParent).set(0, a)
    }
  };
  $thiz.sci_VectorBuilder__f_prefixIsRightAligned = false
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = $n(data).u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz)
    };
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopyRefs($n(data), 0, $n(dest), destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopyRefs($n(data), copy1, $n(dest$1), 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0)
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if (($m_sc_ArrayOps$(), ($n(slice).u.length === 0))) {
    return (void 0)
  };
  if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz)
  };
  var sl = $n(slice).u.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0));
      var dest = $thiz.sci_VectorBuilder__f_a2;
      $systemArraycopyRefs($n(slice), 0, $n(dest), destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.sci_VectorBuilder__f_a2;
        $systemArraycopyRefs($n(slice), copy1, $n(dest$1), 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5))
      };
      break
    }
    case 3: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1024) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f = ((e$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2, 1), 2)
        });
        var len = $n(slice).u.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var arg1 = $n(slice).get(i);
            f(arg1);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3 = $asArrayOf_I(slice, 1);
          while ((i < len)) {
            var arg1$1 = $n(x3).get(i);
            f(arg1$1);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4 = $asArrayOf_D(slice, 1);
          while ((i < len)) {
            var arg1$2 = $n(x4).get(i);
            f(arg1$2);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5 = $asArrayOf_J(slice, 1);
          while ((i < len)) {
            var t = $n(x5).get(i);
            var lo = t.RTLong__f_lo;
            var hi = t.RTLong__f_hi;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6 = $asArrayOf_F(slice, 1);
          while ((i < len)) {
            var arg1$3 = $n(x6).get(i);
            f(arg1$3);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7 = $asArrayOf_C(slice, 1);
          while ((i < len)) {
            var arg1$4 = $n(x7).get(i);
            f($bC(arg1$4));
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8 = $asArrayOf_B(slice, 1);
          while ((i < len)) {
            var arg1$5 = $n(x8).get(i);
            f(arg1$5);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9 = $asArrayOf_S(slice, 1);
          while ((i < len)) {
            var arg1$6 = $n(x9).get(i);
            f(arg1$6);
            i = ((1 + i) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10 = $asArrayOf_Z(slice, 1);
          while ((i < len)) {
            var arg1$7 = $n(x10).get(i);
            f(arg1$7);
            i = ((1 + i) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var a$1 = (31 & ((((32768 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0));
      var dest$2 = $thiz.sci_VectorBuilder__f_a3;
      $systemArraycopyRefs($n(slice), 0, $n(dest$2), destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.sci_VectorBuilder__f_a3;
        $systemArraycopyRefs($n(slice), copy1$2, $n(dest$3), 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10))
      };
      break
    }
    case 4: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 32768) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f$1 = ((e$3$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$3$2, 1), 3)
        });
        var len$1 = $n(slice).u.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var arg1$8 = $n(slice).get(i$1);
            f$1(arg1$8);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$1 = $asArrayOf_I(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$9 = $n(x3$1).get(i$1);
            f$1(arg1$9);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$1 = $asArrayOf_D(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$10 = $n(x4$1).get(i$1);
            f$1(arg1$10);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$1 = $asArrayOf_J(slice, 1);
          while ((i$1 < len$1)) {
            var t$1 = $n(x5$1).get(i$1);
            var lo$1 = t$1.RTLong__f_lo;
            var hi$1 = t$1.RTLong__f_hi;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$1 = $asArrayOf_F(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$11 = $n(x6$1).get(i$1);
            f$1(arg1$11);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$1 = $asArrayOf_C(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$12 = $n(x7$1).get(i$1);
            f$1($bC(arg1$12));
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$1 = $asArrayOf_B(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$13 = $n(x8$1).get(i$1);
            f$1(arg1$13);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$1 = $asArrayOf_S(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$14 = $n(x9$1).get(i$1);
            f$1(arg1$14);
            i$1 = ((1 + i$1) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$1 = $asArrayOf_Z(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$15 = $n(x10$1).get(i$1);
            f$1(arg1$15);
            i$1 = ((1 + i$1) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var a$2 = (31 & ((((1048576 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0));
      var dest$4 = $thiz.sci_VectorBuilder__f_a4;
      $systemArraycopyRefs($n(slice), 0, $n(dest$4), destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.sci_VectorBuilder__f_a4;
        $systemArraycopyRefs($n(slice), copy1$3, $n(dest$5), 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15))
      };
      break
    }
    case 5: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1048576) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f$2 = ((e$4$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$4$2, 1), 4)
        });
        var len$2 = $n(slice).u.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var arg1$16 = $n(slice).get(i$2);
            f$2(arg1$16);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$2 = $asArrayOf_I(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$17 = $n(x3$2).get(i$2);
            f$2(arg1$17);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$2 = $asArrayOf_D(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$18 = $n(x4$2).get(i$2);
            f$2(arg1$18);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$2 = $asArrayOf_J(slice, 1);
          while ((i$2 < len$2)) {
            var t$2 = $n(x5$2).get(i$2);
            var lo$2 = t$2.RTLong__f_lo;
            var hi$2 = t$2.RTLong__f_hi;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$2 = $asArrayOf_F(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$19 = $n(x6$2).get(i$2);
            f$2(arg1$19);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$2 = $asArrayOf_C(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$20 = $n(x7$2).get(i$2);
            f$2($bC(arg1$20));
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$2 = $asArrayOf_B(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$21 = $n(x8$2).get(i$2);
            f$2(arg1$21);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$2 = $asArrayOf_S(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$22 = $n(x9$2).get(i$2);
            f$2(arg1$22);
            i$2 = ((1 + i$2) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$2 = $asArrayOf_Z(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$23 = $n(x10$2).get(i$2);
            f$2(arg1$23);
            i$2 = ((1 + i$2) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var a$3 = (31 & ((((33554432 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0));
      var dest$6 = $thiz.sci_VectorBuilder__f_a5;
      $systemArraycopyRefs($n(slice), 0, $n(dest$6), destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.sci_VectorBuilder__f_a5;
        $systemArraycopyRefs($n(slice), copy1$4, $n(dest$7), 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20))
      };
      break
    }
    case 6: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 33554432) | 0) !== 0)) {
        $m_sc_ArrayOps$();
        var f$3 = ((e$5$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$5$2, 1), 5)
        });
        var len$3 = $n(slice).u.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var arg1$24 = $n(slice).get(i$3);
            f$3(arg1$24);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$3 = $asArrayOf_I(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$25 = $n(x3$3).get(i$3);
            f$3(arg1$25);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$3 = $asArrayOf_D(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$26 = $n(x4$3).get(i$3);
            f$3(arg1$26);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$3 = $asArrayOf_J(slice, 1);
          while ((i$3 < len$3)) {
            var t$3 = $n(x5$3).get(i$3);
            var lo$3 = t$3.RTLong__f_lo;
            var hi$3 = t$3.RTLong__f_hi;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$3 = $asArrayOf_F(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$27 = $n(x6$3).get(i$3);
            f$3(arg1$27);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$3 = $asArrayOf_C(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$28 = $n(x7$3).get(i$3);
            f$3($bC(arg1$28));
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$3 = $asArrayOf_B(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$29 = $n(x8$3).get(i$3);
            f$3(arg1$29);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$3 = $asArrayOf_S(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$30 = $n(x9$3).get(i$3);
            f$3(arg1$30);
            i$3 = ((1 + i$3) | 0)
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$3 = $asArrayOf_Z(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$31 = $n(x10$3).get(i$3);
            f$3(arg1$31);
            i$3 = ((1 + i$3) | 0)
          }
        } else {
          throw new $c_s_MatchError(slice)
        };
        return (void 0)
      };
      var destPos$5 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements")
      };
      var dest$8 = $thiz.sci_VectorBuilder__f_a6;
      $systemArraycopyRefs($n(slice), 0, $n(dest$8), destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break
    }
    default: {
      throw new $c_s_MatchError(dim)
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = $n(xs).vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = $n(xs).vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice)
    } else if ((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32) || ($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1)
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2) => {
        var data = $asArrayOf_O(data$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data)
      })))
    };
    sliceIdx = ((1 + sliceIdx) | 0)
  };
  return $thiz
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest + n) | 0);
    var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor)
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth))
  } else if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a2).set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = 2
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1)
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a3).set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = 3
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2)
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a4).set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = 4
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3)
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a5).set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = 5
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4)
  } else {
    if (($thiz.sci_VectorBuilder__f_depth <= 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n($thiz.sci_VectorBuilder__f_a6).set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = 6
    };
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $n($thiz.sci_VectorBuilder__f_a6).set(((idx >>> 25) | 0), $thiz.sci_VectorBuilder__f_a5)
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 1
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
  /*<skip>*/
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = $n(v).vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break
    }
    case 1: {
      var v1 = $as_sci_Vector1(v);
      this.sci_VectorBuilder__f_depth = 1;
      var i = $n($n(v1).sci_Vector__f_prefix1).u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = $n(v1).sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = (($n(a).u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break
    }
    case 3: {
      var v2 = $as_sci_Vector2(v);
      var d2 = $n(v2).sci_Vector2__f_data2;
      var a$1 = $n(v2).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$1).u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32 - $n(v2).sci_Vector2__f_len1) | 0);
      var i$1 = (($n(v2).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a2).set(0, $n(v2).sci_Vector__f_prefix1);
      var dest = this.sci_VectorBuilder__f_a2;
      var length = $n(d2).u.length;
      $systemArraycopyRefs($n(d2), 0, $n(dest), 1, length);
      $n(this.sci_VectorBuilder__f_a2).set(((1 + $n(d2).u.length) | 0), this.sci_VectorBuilder__f_a1);
      break
    }
    case 5: {
      var v3 = $as_sci_Vector3(v);
      var d3 = $n(v3).sci_Vector3__f_data3;
      var s2 = $n(v3).sci_Vector3__f_suffix2;
      var a$2 = $n(v3).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$2).u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1024 - $n(v3).sci_Vector3__f_len12) | 0);
      var i$2 = (($n(v3).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a3).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v3).sci_Vector__f_prefix1, $n(v3).sci_Vector3__f_prefix2), 2));
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = $n(d3).u.length;
      $systemArraycopyRefs($n(d3), 0, $n(dest$1), 1, length$1);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
      $n(this.sci_VectorBuilder__f_a3).set(((1 + $n(d3).u.length) | 0), this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 7: {
      var v4 = $as_sci_Vector4(v);
      var d4 = $n(v4).sci_Vector4__f_data4;
      var s3 = $n(v4).sci_Vector4__f_suffix3;
      var s2$2 = $n(v4).sci_Vector4__f_suffix2;
      var a$3 = $n(v4).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$3).u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32768 - $n(v4).sci_Vector4__f_len123) | 0);
      var i$3 = (($n(v4).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a4).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v4).sci_Vector__f_prefix1, $n(v4).sci_Vector4__f_prefix2), $n(v4).sci_Vector4__f_prefix3), 3));
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = $n(d4).u.length;
      $systemArraycopyRefs($n(d4), 0, $n(dest$2), 1, length$2);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
      $n(this.sci_VectorBuilder__f_a4).set(((1 + $n(d4).u.length) | 0), this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$2).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 9: {
      var v5 = $as_sci_Vector5(v);
      var d5 = $n(v5).sci_Vector5__f_data5;
      var s4 = $n(v5).sci_Vector5__f_suffix4;
      var s3$2 = $n(v5).sci_Vector5__f_suffix3;
      var s2$3 = $n(v5).sci_Vector5__f_suffix2;
      var a$4 = $n(v5).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$4).u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1048576 - $n(v5).sci_Vector5__f_len1234) | 0);
      var i$4 = (($n(v5).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a5).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v5).sci_Vector__f_prefix1, $n(v5).sci_Vector5__f_prefix2), $n(v5).sci_Vector5__f_prefix3), $n(v5).sci_Vector5__f_prefix4), 4));
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = $n(d5).u.length;
      $systemArraycopyRefs($n(d5), 0, $n(dest$3), 1, length$3);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
      $n(this.sci_VectorBuilder__f_a5).set(((1 + $n(d5).u.length) | 0), this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$2).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$3).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    case 11: {
      var v6 = $as_sci_Vector6(v);
      var d6 = $n(v6).sci_Vector6__f_data6;
      var s5 = $n(v6).sci_Vector6__f_suffix5;
      var s4$2 = $n(v6).sci_Vector6__f_suffix4;
      var s3$3 = $n(v6).sci_Vector6__f_suffix3;
      var s2$4 = $n(v6).sci_Vector6__f_suffix2;
      var a$5 = $n(v6).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$5).u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((33554432 - $n(v6).sci_Vector6__f_len12345) | 0);
      var i$5 = (($n(v6).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n(this.sci_VectorBuilder__f_a6).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v6).sci_Vector__f_prefix1, $n(v6).sci_Vector6__f_prefix2), $n(v6).sci_Vector6__f_prefix3), $n(v6).sci_Vector6__f_prefix4), $n(v6).sci_Vector6__f_prefix5), 5));
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = $n(d6).u.length;
      $systemArraycopyRefs($n(d6), 0, $n(dest$4), 1, length$4);
      this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
      $n(this.sci_VectorBuilder__f_a6).set(((1 + $n(d6).u.length) | 0), this.sci_VectorBuilder__f_a5);
      $n(this.sci_VectorBuilder__f_a5).set($n(s5).u.length, this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4$2).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$4).u.length, this.sci_VectorBuilder__f_a1);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0)
  };
  return this
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this)
  };
  $n(this.sci_VectorBuilder__f_a1).set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(xs);
    return ((((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) && (!this.sci_VectorBuilder__f_prefixIsRightAligned)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2))
  } else {
    return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  if (this.sci_VectorBuilder__f_prefixIsRightAligned) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this)
  };
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$()
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len))
  } else if ((len <= 32)) {
    var a = this.sci_VectorBuilder__f_a1;
    return new $c_sci_Vector1((($n(a).u.length === realLen) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, realLen)))
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original = this.sci_VectorBuilder__f_a2;
    var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, 1, i2), 2);
    var prefix1 = $n(this.sci_VectorBuilder__f_a2).get(0);
    var a$1 = $n(this.sci_VectorBuilder__f_a2).get(i2);
    var len$1 = ((1 + i1) | 0);
    var suffix1 = (($n(a$1).u.length === len$1) ? a$1 : $m_ju_Arrays$().copyOf__AO__I__AO(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0), data, suffix1, realLen)
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$1 = this.sci_VectorBuilder__f_a3;
    var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i3), 3);
    var a$2 = $n(this.sci_VectorBuilder__f_a3).get(0);
    var to = $n(a$2).u.length;
    var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 1, to), 2);
    var prefix1$2 = $n($n(this.sci_VectorBuilder__f_a3).get(0)).get(0);
    var original$2 = $n(this.sci_VectorBuilder__f_a3).get(i3);
    var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$2, i2$2), 2);
    var a$3 = $n($n(this.sci_VectorBuilder__f_a3).get(i3)).get(i2$2);
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = (($n(a$3).u.length === len$2) ? a$3 : $m_ju_Arrays$().copyOf__AO__I__AO(a$3, len$2));
    var len1 = $n(prefix1$2).u.length;
    var len12 = ((len1 + ($n(prefix2).u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen)
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$3 = this.sci_VectorBuilder__f_a4;
    var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, 1, i4), 4);
    var a$4 = $n(this.sci_VectorBuilder__f_a4).get(0);
    var to$1 = $n(a$4).u.length;
    var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$1), 3);
    var a$5 = $n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0);
    var to$2 = $n(a$5).u.length;
    var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 1, to$2), 2);
    var prefix1$3 = $n($n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0)).get(0);
    var original$4 = $n(this.sci_VectorBuilder__f_a4).get(i4);
    var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$4, i3$2), 3);
    var original$5 = $n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2);
    var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i2$3), 2);
    var a$6 = $n($n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2)).get(i2$3);
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = (($n(a$6).u.length === len$3) ? a$6 : $m_ju_Arrays$().copyOf__AO__I__AO(a$6, len$3));
    var len1$2 = $n(prefix1$3).u.length;
    var len12$2 = ((len1$2 + ($n(prefix2$2).u.length << 5)) | 0);
    var len123 = ((len12$2 + ($n(prefix3).u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen)
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$6 = this.sci_VectorBuilder__f_a5;
    var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$6, 1, i5), 5);
    var a$7 = $n(this.sci_VectorBuilder__f_a5).get(0);
    var to$3 = $n(a$7).u.length;
    var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$3), 4);
    var a$8 = $n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0);
    var to$4 = $n(a$8).u.length;
    var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$4), 3);
    var a$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0);
    var to$5 = $n(a$9).u.length;
    var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$9, 1, to$5), 2);
    var prefix1$4 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0)).get(0);
    var original$7 = $n(this.sci_VectorBuilder__f_a5).get(i5);
    var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$7, i4$2), 4);
    var original$8 = $n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2);
    var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i3$3), 3);
    var original$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3);
    var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i2$4), 2);
    var a$10 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3)).get(i2$4);
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = (($n(a$10).u.length === len$4) ? a$10 : $m_ju_Arrays$().copyOf__AO__I__AO(a$10, len$4));
    var len1$3 = $n(prefix1$4).u.length;
    var len12$3 = ((len1$3 + ($n(prefix2$3).u.length << 5)) | 0);
    var len123$2 = ((len12$3 + ($n(prefix3$2).u.length << 10)) | 0);
    var len1234 = ((len123$2 + ($n(prefix4).u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen)
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$10 = this.sci_VectorBuilder__f_a6;
    var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$10, 1, i6), 6);
    var a$11 = $n(this.sci_VectorBuilder__f_a6).get(0);
    var to$6 = $n(a$11).u.length;
    var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$6), 5);
    var a$12 = $n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0);
    var to$7 = $n(a$12).u.length;
    var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$7), 4);
    var a$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0);
    var to$8 = $n(a$13).u.length;
    var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$8), 3);
    var a$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0);
    var to$9 = $n(a$14).u.length;
    var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$14, 1, to$9), 2);
    var prefix1$5 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0)).get(0);
    var original$11 = $n(this.sci_VectorBuilder__f_a6).get(i6);
    var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$11, i5$2), 5);
    var original$12 = $n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2);
    var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i4$3), 4);
    var original$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3);
    var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i3$4), 3);
    var original$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4);
    var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i2$5), 2);
    var a$15 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4)).get(i2$5);
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = (($n(a$15).u.length === len$5) ? a$15 : $m_ju_Arrays$().copyOf__AO__I__AO(a$15, len$5));
    var len1$4 = $n(prefix1$5).u.length;
    var len12$4 = ((len1$4 + ($n(prefix2$4).u.length << 5)) | 0);
    var len123$3 = ((len12$4 + ($n(prefix3$3).u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + ($n(prefix4$2).u.length << 15)) | 0);
    var len12345 = ((len1234$2 + ($n(prefix5).u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen)
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")")
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector()
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(elems)
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem)
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"))
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)))
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth))
}
var $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$())
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
  /*<skip>*/
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass({
  scm_Buffer$: 0
}, false, "scala.collection.mutable.Buffer$", {
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_Buffer$.prototype.$classData = $d_scm_Buffer$;
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$()
  };
  return $n_scm_Buffer$
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $c_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.apply__sci_Seq__O = (function(elems) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(elems)
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O())
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.s_util_Failure__f_exception = null;
  this.s_util_Failure__f_exception = exception
}
$c_s_util_Failure.prototype = new $h_s_util_Try();
$c_s_util_Failure.prototype.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
  /*<skip>*/
}
$h_s_util_Failure.prototype = $c_s_util_Failure.prototype;
$c_s_util_Failure.prototype.isFailure__Z = (function() {
  return true
});
$c_s_util_Failure.prototype.isSuccess__Z = (function() {
  return false
});
$c_s_util_Failure.prototype.get__O = (function() {
  var $x_1 = this.s_util_Failure__f_exception;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.sjs_js_JavaScriptException__f_exception : $n($x_1))
});
$c_s_util_Failure.prototype.map__F1__s_util_Try = (function(f) {
  return this
});
$c_s_util_Failure.prototype.fold__F1__F1__O = (function(fa, fb) {
  return $n(fa).apply__O__O(this.s_util_Failure__f_exception)
});
$c_s_util_Failure.prototype.productPrefix__T = (function() {
  return "Failure"
});
$c_s_util_Failure.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Failure.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Failure__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Failure.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Failure.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Failure.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Failure.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var Failure$1 = $as_s_util_Failure(x$1);
    var x = this.s_util_Failure__f_exception;
    var x$2 = $n(Failure$1).s_util_Failure__f_exception;
    return ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))
  } else {
    return false
  }
});
function $as_s_util_Failure(obj) {
  return (((obj instanceof $c_s_util_Failure) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Failure"))
}
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Failure)))
}
function $asArrayOf_s_util_Failure(obj, depth) {
  return (($isArrayOf_s_util_Failure(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Failure;", depth))
}
var $d_s_util_Failure = new $TypeData().initClass({
  s_util_Failure: 0
}, false, "scala.util.Failure", {
  s_util_Failure: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Failure.prototype.$classData = $d_s_util_Failure;
/** @constructor */
function $c_s_util_Success(value) {
  this.s_util_Success__f_value = null;
  this.s_util_Success__f_value = value
}
$c_s_util_Success.prototype = new $h_s_util_Try();
$c_s_util_Success.prototype.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
  /*<skip>*/
}
$h_s_util_Success.prototype = $c_s_util_Success.prototype;
$c_s_util_Success.prototype.isFailure__Z = (function() {
  return false
});
$c_s_util_Success.prototype.isSuccess__Z = (function() {
  return true
});
$c_s_util_Success.prototype.get__O = (function() {
  return this.s_util_Success__f_value
});
$c_s_util_Success.prototype.map__F1__s_util_Try = (function(f) {
  try {
    var r1 = $n(f).apply__O__O(this.s_util_Success__f_value);
    return new $c_s_util_Success(r1)
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      return new $c_s_util_Failure(e$2)
    } else {
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
    }
  }
});
$c_s_util_Success.prototype.fold__F1__F1__O = (function(fa, fb) {
  try {
    return $n(fb).apply__O__O(this.s_util_Success__f_value)
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
      return $n(fa).apply__O__O(e$2)
    } else {
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
    }
  }
});
$c_s_util_Success.prototype.productPrefix__T = (function() {
  return "Success"
});
$c_s_util_Success.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Success.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Success__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Success.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Success.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Success.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Success.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Success)) {
    var Success$1 = $as_s_util_Success(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, $n(Success$1).s_util_Success__f_value)
  } else {
    return false
  }
});
function $as_s_util_Success(obj) {
  return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"))
}
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Success)))
}
function $asArrayOf_s_util_Success(obj, depth) {
  return (($isArrayOf_s_util_Success(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Success;", depth))
}
var $d_s_util_Success = new $TypeData().initClass({
  s_util_Success: 0
}, false, "scala.util.Success", {
  s_util_Success: 1,
  s_util_Try: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Success.prototype.$classData = $d_s_util_Success;
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error = error;
    this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause = cause;
    var message = ((("ErrorHandlingError: " + $n(error).getMessage__T()) + "; cause: ") + $n(cause).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true);
    this.initCause__jl_Throwable__jl_Throwable(cause)
  };
  toString__T() {
    return ((("ErrorHandlingError: " + this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error) + "; cause: ") + this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause)
  };
  productPrefix__T() {
    return "ErrorHandlingError"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
        break
      }
      case 1: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var ErrorHandlingError$1 = $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(x$1);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
      var x$2 = $n(ErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        var x$3 = this.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        var x$4 = $n(ErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError__f_cause;
        if (((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4))) {
          $n(ErrorHandlingError$1);
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError"))
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)))
}
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ErrorHandlingError;", depth))
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError: 0
}, false, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", {
  Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError;
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error = error;
    var message = ("ObserverError: " + $n(error).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true)
  };
  toString__T() {
    return ("ObserverError: " + this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error)
  };
  productPrefix__T() {
    return "ObserverError"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var ObserverError$1 = $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError(x$1);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error;
      var x$2 = $n(ObserverError$1).Lcom_raquo_airstream_core_AirstreamError$ObserverError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        $n(ObserverError$1);
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ObserverError"))
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ObserverError)))
}
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ObserverError;", depth))
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$ObserverError: 0
}, false, "com.raquo.airstream.core.AirstreamError$ObserverError", {
  Lcom_raquo_airstream_core_AirstreamError$ObserverError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$ObserverError.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError;
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause = null;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error = error;
    this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause = cause;
    var message = ((("ObserverErrorHandlingError: " + $n(error).getMessage__T()) + "; cause: ") + $n(cause).getMessage__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, null, true, true);
    this.initCause__jl_Throwable__jl_Throwable(cause)
  };
  toString__T() {
    return ((("ObserverErrorHandlingError: " + this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error) + "; cause: ") + this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause)
  };
  productPrefix__T() {
    return "ObserverErrorHandlingError"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
        break
      }
      case 1: {
        return this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var ObserverErrorHandlingError$1 = $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(x$1);
      var x = this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
      var x$2 = $n(ObserverErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_error;
      if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
        var x$3 = this.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        var x$4 = $n(ObserverErrorHandlingError$1).Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError__f_cause;
        if (((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4))) {
          $n(ObserverErrorHandlingError$1);
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj) {
  return (((obj instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError"))
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)))
}
function $asArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (($isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError;", depth))
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().initClass({
  Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError: 0
}, false, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", {
  Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError: 1,
  Lcom_raquo_airstream_core_AirstreamError: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError.prototype.$classData = $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError;
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.tryNow__s_util_Try()
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.Lcom_raquo_airstream_state_SourceVar__f_currentValue = null;
  this.Lcom_raquo_airstream_state_SourceVar__f__varSignal = null;
  this.Lcom_raquo_airstream_state_SourceVar__f_signal = null;
  this.Lcom_raquo_airstream_state_SourceVar__f_writer = null;
  this.Lcom_raquo_airstream_state_SourceVar__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_state_SourceVar__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.Lcom_raquo_airstream_state_SourceVar__f_currentValue = initial;
  this.Lcom_raquo_airstream_state_SourceVar__f__varSignal = new $c_Lcom_raquo_airstream_state_VarSignal(this.Lcom_raquo_airstream_state_SourceVar__f_currentValue);
  this.Lcom_raquo_airstream_state_SourceVar__f_signal = this.Lcom_raquo_airstream_state_SourceVar__f__varSignal
}
$c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_SourceVar.prototype.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $c_Lcom_raquo_airstream_state_SourceVar.prototype;
$c_Lcom_raquo_airstream_state_SourceVar.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_state_SourceVar.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_state_SourceVar__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_state_SourceVar.prototype.setCurrentValue__s_util_Try__Lcom_raquo_airstream_core_Transaction__V = (function(value, transaction) {
  this.Lcom_raquo_airstream_state_SourceVar__f_currentValue = value;
  var this$1 = $n(this.Lcom_raquo_airstream_state_SourceVar__f__varSignal);
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this$1, value, transaction)
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().initClass({
  Lcom_raquo_airstream_state_SourceVar: 0
}, false, "com.raquo.airstream.state.SourceVar", {
  Lcom_raquo_airstream_state_SourceVar: 1,
  O: 1,
  Lcom_raquo_airstream_state_Var: 1,
  Lcom_raquo_airstream_core_Source$SignalSource: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Sink: 1,
  Lcom_raquo_airstream_core_Named: 1
});
$c_Lcom_raquo_airstream_state_SourceVar.prototype.$classData = $d_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$pilotSubscription = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ReactiveElement$$maybeEventListeners = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = null;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag = tag;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref = ref;
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this)
}
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype;
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.willSetParent__s_Option__V = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.setParent__s_Option__V = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.apply__Lcom_raquo_laminar_nodes_ReactiveElement__V = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().appendChild__Lcom_raquo_laminar_nodes_ParentNode__Lcom_raquo_laminar_nodes_ChildNode__Z(parentNode, this)
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.dynamicOwner__Lcom_raquo_airstream_ownership_DynamicOwner = (function() {
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ParentNode$_setter_$dynamicOwner_$eq__Lcom_raquo_airstream_ownership_DynamicOwner__V = (function(x$1) {
  this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner = x$1
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.com$raquo$laminar$nodes$ChildNode$$_maybeParent__s_Option = (function() {
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_com$raquo$laminar$nodes$ChildNode$$_maybeParent
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.toString__T = (function() {
  return (("ReactiveHtmlElement(" + ((this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref !== null) ? $as_T(this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.outerHTML) : ("tag=" + $n(this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_tag).Lcom_raquo_laminar_tags_HtmlTag__f_name))) + ")")
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.ref__Lorg_scalajs_dom_Node = (function() {
  return this.Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref
});
function $as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj) {
  return (((obj instanceof $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement) || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveHtmlElement"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveHtmlElement)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveHtmlElement;", depth))
}
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().initClass({
  Lcom_raquo_laminar_nodes_ReactiveHtmlElement: 0
}, false, "com.raquo.laminar.nodes.ReactiveHtmlElement", {
  Lcom_raquo_laminar_nodes_ReactiveHtmlElement: 1,
  O: 1,
  Lcom_raquo_laminar_nodes_ReactiveElement: 1,
  Lcom_raquo_laminar_nodes_ChildNode: 1,
  Lcom_raquo_laminar_nodes_ReactiveNode: 1,
  Lcom_raquo_laminar_modifiers_Modifier: 1,
  Lcom_raquo_laminar_nodes_ParentNode: 1
});
$c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype.$classData = $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
function $as_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "com.raquo.laminar.nodes.ReactiveSvgElement"))
}
function $isArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_raquo_laminar_nodes_ReactiveSvgElement)))
}
function $asArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj, depth) {
  return (($isArrayOf_Lcom_raquo_laminar_nodes_ReactiveSvgElement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lcom.raquo.laminar.nodes.ReactiveSvgElement;", depth))
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $x_1 = res;
    var index = i;
    res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().toString__I__T(ch);
  return $uI($thiz.indexOf(str))
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
  var s = ("String index out of range: " + index);
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
}
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value)
  } else {
    return false
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T()
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1)
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  var xs$1 = $thiz.sc_ArrayOps$ArrayIterator__f_xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
  return $thiz
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0
}
$c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
$c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
  return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
});
$c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
  return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len)
});
$c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
  var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
  var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
  if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_len
    } else {
      var a = this.sc_ArrayOps$ArrayIterator__f_len;
      var $x_1 = ((a < newPos) ? a : newPos)
    };
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $x_1
  };
  return this
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator: 0
}, false, "scala.collection.ArrayOps$ArrayIterator", {
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator.prototype.$classData = $d_sc_ArrayOps$ArrayIterator;
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value))
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I()
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b)
  };
  return this
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth))
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while (($n(slice).u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx)
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
}
$c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
  /*<skip>*/
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this)
  };
  var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this)
      };
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io
      };
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
      }
    }
  };
  return this
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this)
    };
    var a = ((total - copied) | 0);
    var b = (($n(this.sci_NewVectorIterator__f_a1).u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      $systemArraycopyFull($n(src), srcPos, $n(xs), destPos, count)
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count)
    };
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0)
  };
  return total
});
var $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
/** @constructor */
function $c_scm_ArraySeq$() {
  this.scm_ArraySeq$__f_untagged = null;
  this.scm_ArraySeq$__f_EmptyArraySeq = null;
  $n_scm_ArraySeq$ = this;
  this.scm_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.scm_ArraySeq$__f_EmptyArraySeq = new $c_scm_ArraySeq$ofRef(new $ac_O(0))
}
$c_scm_ArraySeq$.prototype = new $h_O();
$c_scm_ArraySeq$.prototype.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
  /*<skip>*/
}
$h_scm_ArraySeq$.prototype = $c_scm_ArraySeq$.prototype;
$c_scm_ArraySeq$.prototype.make__O__scm_ArraySeq = (function(x) {
  if ((x === null)) {
    return null
  } else if ((x instanceof $ac_O)) {
    var x3 = $asArrayOf_O(x, 1);
    return new $c_scm_ArraySeq$ofRef(x3)
  } else if ((x instanceof $ac_I)) {
    var x4 = $asArrayOf_I(x, 1);
    return new $c_scm_ArraySeq$ofInt(x4)
  } else if ((x instanceof $ac_D)) {
    var x5 = $asArrayOf_D(x, 1);
    return new $c_scm_ArraySeq$ofDouble(x5)
  } else if ((x instanceof $ac_J)) {
    var x6 = $asArrayOf_J(x, 1);
    return new $c_scm_ArraySeq$ofLong(x6)
  } else if ((x instanceof $ac_F)) {
    var x7 = $asArrayOf_F(x, 1);
    return new $c_scm_ArraySeq$ofFloat(x7)
  } else if ((x instanceof $ac_C)) {
    var x8 = $asArrayOf_C(x, 1);
    return new $c_scm_ArraySeq$ofChar(x8)
  } else if ((x instanceof $ac_B)) {
    var x9 = $asArrayOf_B(x, 1);
    return new $c_scm_ArraySeq$ofByte(x9)
  } else if ((x instanceof $ac_S)) {
    var x10 = $asArrayOf_S(x, 1);
    return new $c_scm_ArraySeq$ofShort(x10)
  } else if ((x instanceof $ac_Z)) {
    var x11 = $asArrayOf_Z(x, 1);
    return new $c_scm_ArraySeq$ofBoolean(x11)
  } else if ($isArrayOf_jl_Void(x, 1)) {
    var x12 = $asArrayOf_jl_Void(x, 1);
    return new $c_scm_ArraySeq$ofUnit(x12)
  } else {
    throw new $c_s_MatchError(x)
  }
});
var $d_scm_ArraySeq$ = new $TypeData().initClass({
  scm_ArraySeq$: 0
}, false, "scala.collection.mutable.ArraySeq$", {
  scm_ArraySeq$: 1,
  O: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$.prototype.$classData = $d_scm_ArraySeq$;
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$()
  };
  return $n_scm_ArraySeq$
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
  /*<skip>*/
}
$c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
  /*<skip>*/
}
$h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
function $as_Ljava_io_PrintStream(obj) {
  return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"))
}
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_io_PrintStream)))
}
function $asArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (($isArrayOf_Ljava_io_PrintStream(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.io.PrintStream;", depth))
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next$mcB$sp__B = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next__O = (function() {
  return this.next$mcB$sp__B()
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcB$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", {
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next$mcC$sp__C = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next__O = (function() {
  return $bC(this.next$mcC$sp__C())
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcC$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", {
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next$mcD$sp__D = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next__O = (function() {
  return this.next$mcD$sp__D()
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcD$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", {
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next$mcF$sp__F = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next__O = (function() {
  return this.next$mcF$sp__F()
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcF$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", {
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next$mcI$sp__I = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next__O = (function() {
  return this.next$mcI$sp__I()
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcI$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", {
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next$mcJ$sp__J = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var t = $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return new $c_RTLong(lo, hi)
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next__O = (function() {
  return this.next$mcJ$sp__J()
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", {
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next$mcS$sp__S = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next__O = (function() {
  return this.next$mcS$sp__S()
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcS$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", {
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next$mcV$sp__V = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next__O = (function() {
  this.next$mcV$sp__V()
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcV$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", {
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.sc_ArrayOps$ArrayIterator__f_xs = null;
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  this.sc_ArrayOps$ArrayIterator__f_len = 0;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
  this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp)
}
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
  /*<skip>*/
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype;
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next$mcZ$sp__Z = (function() {
  if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).u.length)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var r = $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
  this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
  return r
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next__O = (function() {
  return this.next$mcZ$sp__Z()
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", {
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcZ$sp;
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T($n(this.sjs_js_JavaScriptException__f_exception))
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    var this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      var JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      var x = this.sjs_js_JavaScriptException__f_exception;
      var y = $n(JavaScriptException$1).sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
var $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, newValue, isInitial) {
  if ((!isInitial)) {
    $thiz._lastUpdateId_$eq__I__V($m_Lcom_raquo_airstream_core_Signal$().nextUpdateId__I())
  };
  $thiz.maybeLastSeenCurrentValue_$eq__sjs_js_$bar__V(newValue)
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var value = $thiz.maybeLastSeenCurrentValue__sjs_js_$bar();
  if ((value === (void 0))) {
    $thiz._lastUpdateId_$eq__I__V($m_Lcom_raquo_airstream_core_Signal$().nextUpdateId__I());
    var nextValue = $thiz.currentValueFromParent__s_util_Try();
    $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, nextValue, true);
    var $x_1 = nextValue
  } else {
    var $x_1 = value
  };
  return $as_s_util_Try($x_1)
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  var nextValue$1 = new $c_s_util_Success(nextValue);
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue$1, transaction)
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  var nextValue = new $c_s_util_Failure(nextError);
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction)
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, nextValue, false);
  var isError = $n(nextValue).isFailure__Z();
  var elem = false;
  elem = false;
  $thiz.isSafeToRemoveObserver_$eq__Z__V(false);
  var this$ = $thiz.externalObservers__Lcom_raquo_ew_JsArray();
  var index = 0;
  while ((index < $uI(this$.length))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    var observer$1 = $as_Lcom_raquo_airstream_core_Observer(observer);
    $n(observer$1).onTry__s_util_Try__V(nextValue);
    if ((isError && (!elem))) {
      elem = true
    }
  };
  var this$$1 = $thiz.internalObservers__Lcom_raquo_ew_JsArray();
  var index$1 = 0;
  while ((index$1 < $uI(this$$1.length))) {
    var observer$2 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    var observer$3 = $as_Lcom_raquo_airstream_core_InternalObserver(observer$2);
    $n(observer$3).onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(nextValue, transaction);
    if ((isError && (!elem))) {
      elem = true
    }
  };
  $thiz.isSafeToRemoveObserver_$eq__Z__V(true);
  var value = $thiz.maybePendingObserverRemovals__sjs_js_$bar();
  if ((value !== (void 0))) {
    var i = 0;
    var len = $uI(value.length);
    while ((i < len)) {
      var arg1$2 = value[i];
      var arg1 = $as_F0(arg1$2);
      var this$12 = $n(arg1);
      this$12.apply__O();
      i = ((1 + i) | 0)
    };
    value.length = 0
  };
  if ((isError && (!elem))) {
    $n(nextValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((err$2) => {
      var err = $as_jl_Throwable(err$2);
      $m_Lcom_raquo_airstream_core_AirstreamError$().sendUnhandledError__jl_Throwable__V(err)
    })), new $c_sjsr_AnonFunction1(((x$1$2) => (void 0))))
  }
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (($as_T((typeof console)) !== "undefined")) {
    if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
      console.error(line)
    } else {
      console.log(line)
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jl_JSConsoleBasedPrintStream__f_isErr = false;
  this.jl_JSConsoleBasedPrintStream__f_buffer = null;
  this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
  var out = new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream();
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, out, false, null);
  this.jl_JSConsoleBasedPrintStream__f_buffer = ""
}
$c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
  /*<skip>*/
}
$h_jl_JSConsoleBasedPrintStream.prototype = $c_jl_JSConsoleBasedPrintStream.prototype;
$c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = $n(rest);
    var nlPos = $uI(this$1.indexOf("\n"));
    if ((nlPos < 0)) {
      this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
      rest = ""
    } else {
      var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
      var this$2 = $n(rest);
      if ((nlPos > this$2.length)) {
        $charAt(this$2, nlPos)
      };
      if ((nlPos < 0)) {
        $charAt(this$2, (-1))
      };
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
      var this$3 = $n(rest);
      var beginIndex = ((1 + nlPos) | 0);
      if (((beginIndex < 0) || (beginIndex > this$3.length))) {
        $charAt(this$3, beginIndex)
      };
      rest = $as_T(this$3.substring(beginIndex))
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().initClass({
  jl_JSConsoleBasedPrintStream: 0
}, false, "java.lang.JSConsoleBasedPrintStream", {
  jl_JSConsoleBasedPrintStream: 1,
  Ljava_io_PrintStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  O: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  jl_Appendable: 1
});
$c_jl_JSConsoleBasedPrintStream.prototype.$classData = $d_jl_JSConsoleBasedPrintStream;
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"))
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)))
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth))
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
}
$c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
  return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
});
/** @constructor */
function $c_sc_AbstractView() {
  /*<skip>*/
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
  /*<skip>*/
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this)
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf()
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0;
  this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
  $m_s_package$();
  this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
}
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
  /*<skip>*/
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.runtimeClass__jl_Class = (function() {
  return $d_O.getClassOf()
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial) {
  this.Lcom_raquo_airstream_state_VarSignal__f_topoRank = 0;
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_externalObservers = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_internalObservers = null;
  this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId = 0;
  this.Lcom_raquo_airstream_state_VarSignal__f_isSafeToRemoveObserver = false;
  this.Lcom_raquo_airstream_state_VarSignal__f_maybePendingObserverRemovals = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue = (void 0);
  this.Lcom_raquo_airstream_state_VarSignal__f_topoRank = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V(this, initial, true)
}
$c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$c_Lcom_raquo_airstream_state_VarSignal.prototype.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $c_Lcom_raquo_airstream_state_VarSignal.prototype;
$c_Lcom_raquo_airstream_state_VarSignal.prototype.tryNow__s_util_Try = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this)
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this)
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.onStop__V = (function() {
  /*<skip>*/
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.equals__O__Z = (function(obj) {
  return (this === obj)
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybeLastSeenCurrentValue__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybeLastSeenCurrentValue_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_maybeLastSeenCurrentValue = x$1
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.externalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_externalObservers
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.internalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_internalObservers
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_externalObservers = x$1
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_internalObservers = x$1
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype._lastUpdateId__I = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype._lastUpdateId_$eq__I__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f__lastUpdateId = x$1
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.isSafeToRemoveObserver__Z = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_isSafeToRemoveObserver
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.isSafeToRemoveObserver_$eq__Z__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_isSafeToRemoveObserver = x$1
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybePendingObserverRemovals__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_maybePendingObserverRemovals
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybePendingObserverRemovals_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_state_VarSignal__f_maybePendingObserverRemovals = x$1
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.topoRank__I = (function() {
  return this.Lcom_raquo_airstream_state_VarSignal__f_topoRank
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.currentValueFromParent__s_util_Try = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this)
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.onWillStart__V = (function() {
  /*<skip>*/
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().initClass({
  Lcom_raquo_airstream_state_VarSignal: 0
}, false, "com.raquo.airstream.state.VarSignal", {
  Lcom_raquo_airstream_state_VarSignal: 1,
  O: 1,
  Lcom_raquo_airstream_core_WritableSignal: 1,
  Lcom_raquo_airstream_core_Signal: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_Source$SignalSource: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_state_StrictSignal: 1
});
$c_Lcom_raquo_airstream_state_VarSignal.prototype.$classData = $d_Lcom_raquo_airstream_state_VarSignal;
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2)
      }
    };
    return false
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $m_Lcom_raquo_airstream_core_Protected$();
  var observable = $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent;
  var this$3 = $n(observable);
  $f_Lcom_raquo_airstream_core_BaseObservable__maybeWillStart__V(this$3);
  if ($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal) {
    $m_Lcom_raquo_airstream_core_Protected$();
    var signal = $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent;
    $m_Lcom_raquo_airstream_core_Protected$();
    var this$5 = $n(signal);
    var newParentLastUpdateId = this$5._lastUpdateId__I();
    if ((newParentLastUpdateId !== $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__V($thiz)
    };
    $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = newParentLastUpdateId
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__V($thiz) {
  var nextValue = $thiz.currentValueFromParent__s_util_Try();
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__Z__V($thiz, nextValue, false)
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal) {
    $m_Lcom_raquo_airstream_core_Protected$();
    var signal = $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent;
    $m_Lcom_raquo_airstream_core_Protected$();
    var this$2 = $n(signal);
    $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = this$2._lastUpdateId__I()
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  var this$1 = $n($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent);
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(this$1, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz)
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  var this$1 = $n($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent);
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(this$1, $thiz)
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal = ($thiz.Lcom_raquo_airstream_misc_MapSignal__f_parent !== null);
  $thiz.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = 0
}
function $f_Lcom_raquo_laminar_api_Laminar__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  $n($thiz.Lcom_raquo_laminar_api_package$$anon$2__f_Modifier);
  var f = new $c_sjsr_AnonFunction1(((element$2) => {
    var element = $as_Lcom_raquo_laminar_nodes_ReactiveElement(element$2);
    var this$3 = $n($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner);
    var this$4 = $n(this$3.Lcom_raquo_airstream_ownership_DynamicOwner__f_com$raquo$airstream$ownership$DynamicOwner$$_maybeCurrentOwner);
    var elem = (!this$4.isEmpty__Z());
    var ignoreNextActivation = new $c_sr_BooleanRef(elem);
    var activate = new $c_sjsr_AnonFunction1(((c$2) => {
      var c = $as_Lcom_raquo_laminar_lifecycle_MountContext(c$2);
      if (ignoreNextActivation.sr_BooleanRef__f_elem) {
        ignoreNextActivation.sr_BooleanRef__f_elem = false
      } else {
        $n(fn).apply__O__O(c)
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().subscribeCallback__Lcom_raquo_airstream_ownership_DynamicOwner__F1__Z__Lcom_raquo_airstream_ownership_DynamicSubscription($n(element).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_dynamicOwner, new $c_sjsr_AnonFunction1(((owner$2) => {
      var owner = $as_Lcom_raquo_airstream_ownership_Owner(owner$2);
      activate.apply__O__O(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner))
    })), false)
  }));
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f)
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  new $c_Lcom_raquo_laminar_api_Laminar$$anon$2($thiz);
  new $c_Lcom_raquo_laminar_api_Laminar$$anon$3($thiz);
  $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_Modifier = $m_Lcom_raquo_laminar_modifiers_Modifier$();
  $m_Lcom_raquo_laminar_modifiers_Setter$();
  $n($thiz.Lcom_raquo_laminar_api_package$$anon$2__f_Modifier);
  $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_child = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
  $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_children = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
  var fn = new $c_sjsr_AnonFunction1(((x$3$2) => {
    var x$3 = $as_Lcom_raquo_laminar_lifecycle_MountContext(x$3$2);
    $n($as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement($n(x$3).Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode)).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref.focus()
  }));
  $f_Lcom_raquo_laminar_api_Laminar__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn)
}
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_parent = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_project = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_recover = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_topoRank = 0;
  this.Lcom_raquo_airstream_misc_MapSignal__f_parentIsSignal = false;
  this.Lcom_raquo_airstream_misc_MapSignal__f__parentLastUpdateId = 0;
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_externalObservers = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_internalObservers = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId = 0;
  this.Lcom_raquo_airstream_misc_MapSignal__f_isSafeToRemoveObserver = false;
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybePendingObserverRemovals = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeDisplayName = null;
  this.Lcom_raquo_airstream_misc_MapSignal__f_parent = parent;
  this.Lcom_raquo_airstream_misc_MapSignal__f_project = project;
  this.Lcom_raquo_airstream_misc_MapSignal__f_recover = recover;
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeDisplayName = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.Lcom_raquo_airstream_misc_MapSignal__f_topoRank = ((1 + ($m_Lcom_raquo_airstream_core_Protected$(), $n(parent).topoRank__I())) | 0)
}
$c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
  /*<skip>*/
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $c_Lcom_raquo_airstream_misc_MapSignal.prototype;
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onWillStart__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this)
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onStart__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this)
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onStop__V = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this)
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.tryNow__s_util_Try = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this)
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.equals__O__Z = (function(obj) {
  return (this === obj)
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.toString__T = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this)
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybeLastSeenCurrentValue__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybeLastSeenCurrentValue_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybeLastSeenCurrentValue = x$1
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.externalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_externalObservers
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.internalObservers__Lcom_raquo_ew_JsArray = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_internalObservers
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$externalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_externalObservers = x$1
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.com$raquo$airstream$core$WritableObservable$_setter_$internalObservers_$eq__Lcom_raquo_ew_JsArray__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_internalObservers = x$1
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype._lastUpdateId__I = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype._lastUpdateId_$eq__I__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f__lastUpdateId = x$1
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.isSafeToRemoveObserver__Z = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_isSafeToRemoveObserver
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.isSafeToRemoveObserver_$eq__Z__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_isSafeToRemoveObserver = x$1
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybePendingObserverRemovals__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_maybePendingObserverRemovals
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybePendingObserverRemovals_$eq__sjs_js_$bar__V = (function(x$1) {
  this.Lcom_raquo_airstream_misc_MapSignal__f_maybePendingObserverRemovals = x$1
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.maybeDisplayName__sjs_js_$bar = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_maybeDisplayName
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.topoRank__I = (function() {
  return this.Lcom_raquo_airstream_misc_MapSignal__f_topoRank
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  $n(nextParentValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((nextError$2) => {
    var nextError = $as_jl_Throwable(nextError$2);
    var this$2 = $n(this.Lcom_raquo_airstream_misc_MapSignal__f_recover);
    if (this$2.isEmpty__Z()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction)
    } else {
      var arg1 = this$2.get__O();
      var pf = $as_s_PartialFunction(arg1);
      try {
        var r1 = $as_s_Option($n(pf).applyOrElse__O__F1__O(nextError, new $c_sjsr_AnonFunction1(((x$1$2) => {
          $as_jl_Throwable(x$1$2);
          return null
        }))));
        var $x_1 = new $c_s_util_Success(r1)
      } catch (e) {
        var $x_1;
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2)
        } else {
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
        }
      };
      $n($x_1).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((tryError$2) => {
        var tryError = $as_jl_Throwable(tryError$2);
        var nextError$1 = new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError);
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$1, transaction)
      })), new $c_sjsr_AnonFunction1(((nextValue$2) => {
        var nextValue = $as_s_Option(nextValue$2);
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction)
        } else {
          var this$4 = $n(nextValue);
          if ((!this$4.isEmpty__Z())) {
            var arg1$1 = this$4.get__O();
            $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, arg1$1, transaction)
          }
        }
      })))
    }
  })), new $c_sjsr_AnonFunction1(((x$3$2) => {
    var nextValue$1 = $n(nextParentValue).map__F1__s_util_Try(this.Lcom_raquo_airstream_misc_MapSignal__f_project);
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue$1, transaction)
  })))
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.currentValueFromParent__s_util_Try = (function() {
  var originalValue = $n($n(this.Lcom_raquo_airstream_misc_MapSignal__f_parent).tryNow__s_util_Try()).map__F1__s_util_Try(this.Lcom_raquo_airstream_misc_MapSignal__f_project);
  return $as_s_util_Try($n(originalValue).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((nextError$2) => {
    var nextError = $as_jl_Throwable(nextError$2);
    var this$2 = $n(this.Lcom_raquo_airstream_misc_MapSignal__f_recover);
    if (this$2.isEmpty__Z()) {
      return originalValue
    } else {
      var arg1 = this$2.get__O();
      var pf = $as_s_PartialFunction(arg1);
      try {
        var r1 = $as_s_Option($n(pf).applyOrElse__O__F1__O(nextError, new $c_sjsr_AnonFunction1(((x$4$2) => {
          $as_jl_Throwable(x$4$2);
          return null
        }))));
        var $x_1 = new $c_s_util_Success(r1)
      } catch (e) {
        var $x_1;
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $c_s_util_Failure(e$2)
        } else {
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $n(e$2))
        }
      };
      return $as_s_util_Try($n($x_1).fold__F1__F1__O(new $c_sjsr_AnonFunction1(((tryError$2) => {
        var tryError = $as_jl_Throwable(tryError$2);
        return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError))
      })), new $c_sjsr_AnonFunction1(((nextValue$2) => {
        var nextValue = $as_s_Option(nextValue$2);
        if ((nextValue === null)) {
          return originalValue
        } else {
          var this$4 = $n(nextValue);
          if (this$4.isEmpty__Z()) {
            var $x_2 = $m_s_None$()
          } else {
            var arg1$1 = this$4.get__O();
            var $x_2 = new $c_s_Some(new $c_s_util_Success(arg1$1))
          };
          var this$5 = $n($x_2);
          return $as_s_util_Try((this$5.isEmpty__Z() ? originalValue : this$5.get__O()))
        }
      }))))
    }
  })), new $c_sjsr_AnonFunction1(((x$6$2) => originalValue))))
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().initClass({
  Lcom_raquo_airstream_misc_MapSignal: 0
}, false, "com.raquo.airstream.misc.MapSignal", {
  Lcom_raquo_airstream_misc_MapSignal: 1,
  O: 1,
  Lcom_raquo_airstream_common_SingleParentSignal: 1,
  Lcom_raquo_airstream_core_WritableSignal: 1,
  Lcom_raquo_airstream_core_Signal: 1,
  Lcom_raquo_airstream_core_Observable: 1,
  Lcom_raquo_airstream_core_BaseObservable: 1,
  Lcom_raquo_airstream_core_Source: 1,
  Lcom_raquo_airstream_core_Named: 1,
  Lcom_raquo_airstream_core_Source$SignalSource: 1,
  Lcom_raquo_airstream_core_WritableObservable: 1,
  Lcom_raquo_airstream_common_InternalTryObserver: 1,
  Lcom_raquo_airstream_core_InternalObserver: 1
});
$c_Lcom_raquo_airstream_misc_MapSignal.prototype.$classData = $d_Lcom_raquo_airstream_misc_MapSignal;
function $p_Lcom_raquo_laminar_api_package$$anon$2__styleAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$0;
  var lo = (8 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_styleAttr = new $c_Lcom_raquo_laminar_keys_HtmlAttr("style", $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$0;
    var lo$1 = (8 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_styleAttr
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__onClick$lzycompute__Lcom_raquo_laminar_keys_EventProp($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$2;
  var hi = (128 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_onClick = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$2;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (128 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$2 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_onClick
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__onInput$lzycompute__Lcom_raquo_laminar_keys_EventProp($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$3;
  var lo = (64 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_onInput = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$3;
    var lo$1 = (64 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$3 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_onInput
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__placeholder$lzycompute__Lcom_raquo_laminar_keys_HtmlProp($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (2 & b.RTLong__f_hi);
  if ((hi === 0)) {
    var codec = $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_placeholder = new $c_Lcom_raquo_laminar_keys_HtmlProp("placeholder", codec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (2 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_placeholder
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__heightAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (2097152 & b.RTLong__f_hi);
  if ((hi === 0)) {
    var codec = $m_Lcom_raquo_laminar_codecs_package$().IntAsStringCodec__Lcom_raquo_laminar_codecs_Codec();
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_heightAttr = new $c_Lcom_raquo_laminar_keys_HtmlAttr("height", codec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (2097152 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_heightAttr
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__maxAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (16777216 & b.RTLong__f_hi);
  if ((hi === 0)) {
    var codec = $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_maxAttr = new $c_Lcom_raquo_laminar_keys_HtmlAttr("max", codec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (16777216 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_maxAttr
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__minAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (33554432 & b.RTLong__f_hi);
  if ((hi === 0)) {
    var codec = $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_minAttr = new $c_Lcom_raquo_laminar_keys_HtmlAttr("min", codec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (33554432 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_minAttr
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__src$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (67108864 & b.RTLong__f_hi);
  if ((hi === 0)) {
    var codec = $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_src = new $c_Lcom_raquo_laminar_keys_HtmlAttr("src", codec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (67108864 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_src
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__type$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (268435456 & b.RTLong__f_hi);
  if ((hi === 0)) {
    var codec = $m_Lcom_raquo_laminar_codecs_package$().Lcom_raquo_laminar_codecs_package$__f_StringAsIsCodec;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_type = new $c_Lcom_raquo_laminar_keys_HtmlAttr("type", codec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (268435456 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_type
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__typ$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (536870912 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_typ = $thiz.type__Lcom_raquo_laminar_keys_HtmlAttr();
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (536870912 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_typ
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__widthAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (1 & b.RTLong__f_lo);
  if ((lo === 0)) {
    var codec = $m_Lcom_raquo_laminar_codecs_package$().IntAsStringCodec__Lcom_raquo_laminar_codecs_Codec();
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_widthAttr = new $c_Lcom_raquo_laminar_keys_HtmlAttr("width", codec);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo$1 = (1 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_widthAttr
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__img$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (256 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_img = new $c_Lcom_raquo_laminar_tags_HtmlTag("img", true);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo$1 = (256 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_img
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__h2$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (16777216 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_h2 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo$1 = (16777216 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_h2
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__h4$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (67108864 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_h4 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h4", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo$1 = (67108864 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_h4
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__label$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (131072 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_label = new $c_Lcom_raquo_laminar_tags_HtmlTag("label", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (131072 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_label
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__input$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (262144 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_input = new $c_Lcom_raquo_laminar_tags_HtmlTag("input", true);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (262144 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_input
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__button$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (524288 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_button = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (524288 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_button
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__select$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (1048576 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_select = new $c_Lcom_raquo_laminar_tags_HtmlTag("select", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (1048576 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_select
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__option$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (8388608 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_option = new $c_Lcom_raquo_laminar_tags_HtmlTag("option", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (8388608 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_option
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__p$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (33554432 & b.RTLong__f_hi);
  if ((hi === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_p = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
    var lo = b$1.RTLong__f_lo;
    var hi$1 = (33554432 | b$1.RTLong__f_hi);
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = new $c_RTLong(lo, hi$1)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_p
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__div$lzycompute__Lcom_raquo_laminar_tags_HtmlTag($thiz) {
  var b = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$6;
  var lo = (32 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_div = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    var b$1 = $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$6;
    var lo$1 = (32 | b$1.RTLong__f_lo);
    var hi = b$1.RTLong__f_hi;
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$6 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_div
}
function $p_Lcom_raquo_laminar_api_package$$anon$2__svg$lzycompute$1__V($thiz) {
  if (($thiz.Lcom_raquo_laminar_api_package$$anon$2__f_svg$module === null)) {
    $thiz.Lcom_raquo_laminar_api_package$$anon$2__f_svg$module = new $c_Lcom_raquo_laminar_api_Laminar$svg$($thiz)
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$2() {
  this.Lcom_raquo_laminar_api_package$$anon$2__f_svg$module = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_Modifier = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_child = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_children = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_className = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_styleAttr = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_onClick = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_onInput = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_placeholder = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_heightAttr = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_maxAttr = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_minAttr = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_src = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_type = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_typ = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_widthAttr = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_img = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_h2 = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_h4 = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_label = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_input = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_button = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_select = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_option = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_p = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_div = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_Var = null;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$0 = $L0;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$2 = $L0;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$3 = $L0;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4 = $L0;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5 = $L0;
  this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$6 = $L0;
  $f_Lcom_raquo_laminar_api_Airstream__$init$__V(this);
  $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V(this);
  $f_Lcom_raquo_laminar_api_Laminar__$init$__V(this)
}
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype = new $h_O();
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.constructor = $c_Lcom_raquo_laminar_api_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$2() {
  /*<skip>*/
}
$h_Lcom_raquo_laminar_api_package$$anon$2.prototype = $c_Lcom_raquo_laminar_api_package$$anon$2.prototype;
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.svg__Lcom_raquo_laminar_api_Laminar$svg$ = (function() {
  if ((this.Lcom_raquo_laminar_api_package$$anon$2__f_svg$module === null)) {
    $p_Lcom_raquo_laminar_api_package$$anon$2__svg$lzycompute$1__V(this)
  };
  return this.Lcom_raquo_laminar_api_package$$anon$2__f_svg$module
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.styleAttr__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$0;
  var lo = (8 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__styleAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_styleAttr
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.onClick__Lcom_raquo_laminar_keys_EventProp = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$2;
  var hi = (128 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__onClick$lzycompute__Lcom_raquo_laminar_keys_EventProp(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_onClick
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.onInput__Lcom_raquo_laminar_keys_EventProp = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$3;
  var lo = (64 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__onInput$lzycompute__Lcom_raquo_laminar_keys_EventProp(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_onInput
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.placeholder__Lcom_raquo_laminar_keys_HtmlProp = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (2 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__placeholder$lzycompute__Lcom_raquo_laminar_keys_HtmlProp(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_placeholder
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.heightAttr__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (2097152 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__heightAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_heightAttr
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.maxAttr__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (16777216 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__maxAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_maxAttr
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.minAttr__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (33554432 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__minAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_minAttr
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.src__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (67108864 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__src$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_src
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.type__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (268435456 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__type$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_type
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.typ__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$4;
  var hi = (536870912 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__typ$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_typ
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.widthAttr__Lcom_raquo_laminar_keys_HtmlAttr = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (1 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__widthAttr$lzycompute__Lcom_raquo_laminar_keys_HtmlAttr(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_widthAttr
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.img__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (256 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__img$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_img
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.h2__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (16777216 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__h2$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_h2
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.h4__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var lo = (67108864 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__h4$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_h4
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.label__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (131072 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__label$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_label
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.input__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (262144 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__input$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_input
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.button__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (524288 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__button$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_button
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.select__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (1048576 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__select$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_select
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.option__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (8388608 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__option$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_option
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.p__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$5;
  var hi = (33554432 & b.RTLong__f_hi);
  if ((hi === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__p$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_p
  }
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.div__Lcom_raquo_laminar_tags_HtmlTag = (function() {
  var b = this.Lcom_raquo_laminar_api_package$$anon$2__f_bitmap$6;
  var lo = (32 & b.RTLong__f_lo);
  if ((lo === 0)) {
    return $p_Lcom_raquo_laminar_api_package$$anon$2__div$lzycompute__Lcom_raquo_laminar_tags_HtmlTag(this)
  } else {
    return this.Lcom_raquo_laminar_api_package$$anon$2__f_div
  }
});
var $d_Lcom_raquo_laminar_api_package$$anon$2 = new $TypeData().initClass({
  Lcom_raquo_laminar_api_package$$anon$2: 0
}, false, "com.raquo.laminar.api.package$$anon$2", {
  Lcom_raquo_laminar_api_package$$anon$2: 1,
  O: 1,
  Lcom_raquo_laminar_api_Laminar: 1,
  Lcom_raquo_laminar_api_Airstream: 1,
  Lcom_raquo_laminar_defs_tags_HtmlTags: 1,
  Lcom_raquo_laminar_defs_attrs_HtmlAttrs: 1,
  Lcom_raquo_laminar_defs_props_HtmlProps: 1,
  Lcom_raquo_laminar_defs_eventProps_GlobalEventProps: 1,
  Lcom_raquo_laminar_defs_styles_StyleProps: 1,
  Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys: 1,
  Lcom_raquo_laminar_Implicits: 1,
  Lcom_raquo_laminar_Implicits$LowPriorityImplicits: 1,
  Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers: 1
});
$c_Lcom_raquo_laminar_api_package$$anon$2.prototype.$classData = $d_Lcom_raquo_laminar_api_package$$anon$2;
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractSeq.prototype.isDefinedAt__I__Z = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sc_AbstractSeq.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
});
$c_sc_AbstractSeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z($uI(x))
});
/** @constructor */
function $c_sc_AbstractSeqView() {
  /*<skip>*/
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
  /*<skip>*/
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
  /*<skip>*/
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx)
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I()
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z()
});
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I()
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
/** @constructor */
function $c_sci_AbstractSeq() {
  /*<skip>*/
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
  /*<skip>*/
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I())
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength
        } else {
          var maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
function $is_scm_Buffer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Buffer)))
}
function $as_scm_Buffer(obj) {
  return (($is_scm_Buffer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Buffer"))
}
function $isArrayOf_scm_Buffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Buffer)))
}
function $asArrayOf_scm_Buffer(obj, depth) {
  return (($isArrayOf_scm_Buffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Buffer;", depth))
}
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements")
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    try {
      var res = $as_sci_LazyList$State($n($thiz.sci_LazyList__f_lazyState).apply__O())
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  var this$1 = $n(b);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    var this$2 = $n(b);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    var this$3 = $n(b);
    var obj = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    var elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
        var this$6 = $n($as_sci_LazyList(elem$2));
        elem$2 = $n(this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) && ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          var this$7 = $n(b);
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$8 = $n($as_sci_LazyList(elem));
          var obj$1 = $n(this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          var this$9 = $n($as_sci_LazyList(elem));
          elem = $n(this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$10 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
            var this$11 = $n($as_sci_LazyList(elem$2));
            elem$2 = $n(this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        var this$12 = $n(b);
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$13 = $n($as_sci_LazyList(elem));
        var obj$2 = $n(this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        var this$14 = $n($as_sci_LazyList(elem));
        elem = $n(this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
      };
      if ((!$n($as_sci_LazyList(elem)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        var this$15 = $n(b);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || ($n(a).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$16 = $n(runner);
          runner = $n(this$16.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$17 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$17.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      var a$1 = $as_sci_LazyList(elem);
      var b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || ($n(a$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        var this$18 = $n(b);
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$19 = $n($as_sci_LazyList(elem));
        var obj$3 = $n(this$19.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        var this$20 = $n($as_sci_LazyList(elem));
        elem = $n(this$20.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
      };
      while (true) {
        var a$2 = $as_sci_LazyList(elem);
        var b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || ($n(a$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$3).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$21 = $n(b);
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$22 = $n($as_sci_LazyList(elem));
          var obj$4 = $n(this$22.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          var this$23 = $n($as_sci_LazyList(elem));
          elem = $n(this$23.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
        } else {
          break
        }
      };
      var this$24 = $n(b);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  var this$25 = $n(b);
  this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
  this.sci_LazyList__f_lazyState = null;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
  this.sci_LazyList__f_bitmap$0 = false;
  this.sci_LazyList__f_lazyState = lazyState;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false
}
$c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$c_sci_LazyList.prototype.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
  /*<skip>*/
}
$h_sci_LazyList.prototype = $c_sci_LazyList.prototype;
$c_sci_LazyList.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_LazyList.prototype.length__I = (function() {
  return $f_sc_LinearSeqOps__length__I(this)
});
$c_sci_LazyList.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
});
$c_sci_LazyList.prototype.isDefinedAt__I__Z = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
});
$c_sci_LazyList.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_LazyList.prototype.scala$collection$immutable$LazyList$$state__sci_LazyList$State = (function() {
  return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
});
$c_sci_LazyList.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
});
$c_sci_LazyList.prototype.knownSize__I = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1))
});
$c_sci_LazyList.prototype.head__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O()
});
$c_sci_LazyList.prototype.force__sci_LazyList = (function() {
  var these = this;
  var those = this;
  if ((!$n(these).isEmpty__Z())) {
    var this$1 = $n(these);
    these = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  while ((those !== these)) {
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$2 = $n(these);
    these = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$3 = $n(these);
    these = $n(this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ((these === those)) {
      return this
    };
    var this$4 = $n(those);
    those = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  return this
});
$c_sci_LazyList.prototype.iterator__sc_Iterator = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
});
$c_sci_LazyList.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!$n(_$this).isEmpty__Z())) {
    var $x_1 = $n(f);
    var this$1 = $n(_$this);
    $n($x_1).apply__O__O($n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O());
    var this$2 = $n(_$this);
    _$this = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  }
});
$c_sci_LazyList.prototype.className__T = (function() {
  return "LazyList"
});
$c_sci_LazyList.prototype.drop__I__sci_LazyList = (function(n) {
  return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
});
$c_sci_LazyList.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  this.force__sci_LazyList();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $n(sb).scm_StringBuilder__f_underlying, start, sep, end);
  return sb
});
$c_sci_LazyList.prototype.toString__T = (function() {
  return $n($p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")")).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_sci_LazyList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.isDefinedAt__O__Z = (function(x) {
  var x$1 = $uI(x);
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
});
$c_sci_LazyList.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_LazyList(n)
});
$c_sci_LazyList.prototype.tail__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
});
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
var $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
}
$c_sjsr_WrappedVarArgs.prototype = new $h_O();
$c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs.prototype = $c_sjsr_WrappedVarArgs.prototype;
$c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
});
$c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sjsr_WrappedVarArgs.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
});
$c_sjsr_WrappedVarArgs.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sjsr_WrappedVarArgs.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
});
$c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
  return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
});
$c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
  return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
});
$c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
  return "WrappedVarArgs"
});
$c_sjsr_WrappedVarArgs.prototype.isDefinedAt__O__Z = (function(x) {
  var idx = $uI(x);
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx)
});
$c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
var $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
/** @constructor */
function $c_scm_AbstractBuffer() {
  /*<skip>*/
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
  /*<skip>*/
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
});
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length)
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()))
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector"
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $n(this.iterator__sc_Iterator()).copyToArray__O__I__I__I(xs, start, len)
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"))
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var c = this.vectorSliceCount__I();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $n($x_1).foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
    i = ((1 + i) | 0)
  }
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
/** @constructor */
function $c_scm_ArraySeq() {
  /*<skip>*/
}
$c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$c_scm_ArraySeq.prototype.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
  /*<skip>*/
}
$h_scm_ArraySeq.prototype = $c_scm_ArraySeq.prototype;
$c_scm_ArraySeq.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_ArraySeq.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_scm_ArraySeq.prototype.className__T = (function() {
  return "ArraySeq"
});
$c_scm_ArraySeq.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    var x2 = $as_scm_ArraySeq(other);
    var xs = this.array__O();
    var $x_1 = $m_jl_reflect_Array$().getLength__O__I(xs);
    var xs$1 = $n(x2).array__O();
    if (($x_1 !== $m_jl_reflect_Array$().getLength__O__I(xs$1))) {
      return false
    }
  };
  return $f_sc_Seq__equals__O__Z(this, other)
});
function $as_scm_ArraySeq(obj) {
  return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"))
}
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)))
}
function $asArrayOf_scm_ArraySeq(obj, depth) {
  return (($isArrayOf_scm_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth))
}
function $as_sci_ArraySeq$ofRef(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"))
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)))
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth))
}
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_List.prototype.isDefinedAt__I__Z = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x)
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix
  } else if ($n(prefix).isEmpty__Z()) {
    return this
  } else {
    var result = new $c_sci_$colon$colon($n(prefix).head__O(), this);
    var curr = result;
    var that = $as_sci_List($n(prefix).tail__O());
    while ((!$n(that).isEmpty__Z())) {
      var temp = new $c_sci_$colon$colon($n(that).head__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp;
      that = $as_sci_List($n(that).tail__O())
    };
    return result
  }
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$())
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__sci_List = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    var x2 = $as_sci_List(prefix);
    return this.$colon$colon$colon__sci_List__sci_List(x2)
  };
  if (($n(prefix).knownSize__I() === 0)) {
    return this
  };
  if (false) {
    var x3 = $as_scm_ListBuffer(prefix);
    if (this.isEmpty__Z()) {
      return $n(x3).toList__sci_List()
    }
  };
  var iter = $n(prefix).iterator__sc_Iterator();
  if ($n(iter).hasNext__Z()) {
    var result = new $c_sci_$colon$colon($n(iter).next__O(), this);
    var curr = result;
    while ($n(iter).hasNext__Z()) {
      var temp = new $c_sci_$colon$colon($n(iter).next__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp
    };
    return result
  } else {
    return this
  }
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    $n(f).apply__O__O($n(these).head__O());
    these = $as_sci_List($n(these).tail__O())
  }
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O())
  };
  return len
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
});
$c_sci_List.prototype.className__T = (function() {
  return "List"
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
  } else {
    return $f_sc_Seq__equals__O__Z(this, o)
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.isDefinedAt__O__Z = (function(x) {
  var x$1 = $uI(x);
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1)
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
  /*<skip>*/
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.scm_ArraySeq$ofBoolean__f_array = null;
  this.scm_ArraySeq$ofBoolean__f_array = array
}
$c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofBoolean.prototype.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofBoolean.prototype = $c_scm_ArraySeq$ofBoolean.prototype;
$c_scm_ArraySeq$ofBoolean.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).u.length
});
$c_scm_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofBoolean__f_array;
  return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofBoolean)) {
    var x2 = $as_scm_ArraySeq$ofBoolean(that);
    var a = this.scm_ArraySeq$ofBoolean__f_array;
    var b = $n(x2).scm_ArraySeq$ofBoolean__f_array;
    return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.scm_ArraySeq$ofBoolean__f_array)
});
$c_scm_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(index) {
  return $n(this.scm_ArraySeq$ofBoolean__f_array).get(index)
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcZI$sp__I__Z(index)
});
$c_scm_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
  return this.apply$mcZI$sp__I__Z(i)
});
$c_scm_ArraySeq$ofBoolean.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofBoolean__f_array
});
function $as_scm_ArraySeq$ofBoolean(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofBoolean"))
}
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofBoolean)))
}
function $asArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofBoolean;", depth))
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().initClass({
  scm_ArraySeq$ofBoolean: 0
}, false, "scala.collection.mutable.ArraySeq$ofBoolean", {
  scm_ArraySeq$ofBoolean: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofBoolean.prototype.$classData = $d_scm_ArraySeq$ofBoolean;
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.scm_ArraySeq$ofByte__f_array = null;
  this.scm_ArraySeq$ofByte__f_array = array
}
$c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofByte.prototype.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofByte.prototype = $c_scm_ArraySeq$ofByte.prototype;
$c_scm_ArraySeq$ofByte.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofByte__f_array).u.length
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__B = (function(index) {
  return $n(this.scm_ArraySeq$ofByte__f_array).get(index)
});
$c_scm_ArraySeq$ofByte.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofByte__f_array;
  return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofByte)) {
    var x2 = $as_scm_ArraySeq$ofByte(that);
    var a = this.scm_ArraySeq$ofByte__f_array;
    var b = $n(x2).scm_ArraySeq$ofByte__f_array;
    return $m_ju_Arrays$().equals__AB__AB__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.scm_ArraySeq$ofByte__f_array)
});
$c_scm_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
  return this.apply__I__B($uI(v1))
});
$c_scm_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
  return this.apply__I__B(i)
});
$c_scm_ArraySeq$ofByte.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofByte__f_array
});
function $as_scm_ArraySeq$ofByte(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofByte"))
}
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofByte)))
}
function $asArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofByte(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofByte;", depth))
}
var $d_scm_ArraySeq$ofByte = new $TypeData().initClass({
  scm_ArraySeq$ofByte: 0
}, false, "scala.collection.mutable.ArraySeq$ofByte", {
  scm_ArraySeq$ofByte: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofByte.prototype.$classData = $d_scm_ArraySeq$ofByte;
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.scm_ArraySeq$ofChar__f_array = null;
  this.scm_ArraySeq$ofChar__f_array = array
}
$c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofChar.prototype.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofChar.prototype = $c_scm_ArraySeq$ofChar.prototype;
$c_scm_ArraySeq$ofChar.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofChar__f_array).u.length
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__C = (function(index) {
  return $n(this.scm_ArraySeq$ofChar__f_array).get(index)
});
$c_scm_ArraySeq$ofChar.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofChar__f_array;
  return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofChar)) {
    var x2 = $as_scm_ArraySeq$ofChar(that);
    var a = this.scm_ArraySeq$ofChar__f_array;
    var b = $n(x2).scm_ArraySeq$ofChar__f_array;
    return $m_ju_Arrays$().equals__AC__AC__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array)
});
$c_scm_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  var jsb = $n(sb).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var len = $n(this.scm_ArraySeq$ofChar__f_array).u.length;
  if ((len !== 0)) {
    var this$3 = $n(sep);
    if ((this$3 === "")) {
      $n(jsb).append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array)
    } else {
      $n(jsb);
      $n(jsb).length__I();
      $n(end);
      $n(sep);
      var this$6 = $n(jsb);
      var c = $n(this.scm_ArraySeq$ofChar__f_array).get(0);
      var str = $as_T(String.fromCharCode(c));
      this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
      var i = 1;
      while ((i < len)) {
        var this$8 = $n(jsb);
        this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$9 = $n(jsb);
        var c$1 = $n(this.scm_ArraySeq$ofChar__f_array).get(i);
        var str$1 = $as_T(String.fromCharCode(c$1));
        this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
        i = ((1 + i) | 0)
      }
    }
  };
  var this$11 = $n(end);
  if ((this$11.length !== 0)) {
    var this$12 = $n(jsb);
    this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return sb
});
$c_scm_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
  return $bC(this.apply__I__C($uI(v1)))
});
$c_scm_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
  return $bC(this.apply__I__C(i))
});
$c_scm_ArraySeq$ofChar.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofChar__f_array
});
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
var $d_scm_ArraySeq$ofChar = new $TypeData().initClass({
  scm_ArraySeq$ofChar: 0
}, false, "scala.collection.mutable.ArraySeq$ofChar", {
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofChar.prototype.$classData = $d_scm_ArraySeq$ofChar;
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.scm_ArraySeq$ofDouble__f_array = null;
  this.scm_ArraySeq$ofDouble__f_array = array
}
$c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofDouble.prototype.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofDouble.prototype = $c_scm_ArraySeq$ofDouble.prototype;
$c_scm_ArraySeq$ofDouble.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofDouble__f_array).u.length
});
$c_scm_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofDouble__f_array;
  return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var x2 = $as_scm_ArraySeq$ofDouble(that);
    var a = this.scm_ArraySeq$ofDouble__f_array;
    var b = $n(x2).scm_ArraySeq$ofDouble__f_array;
    return $m_ju_Arrays$().equals__AD__AD__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.scm_ArraySeq$ofDouble__f_array)
});
$c_scm_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(index) {
  return $n(this.scm_ArraySeq$ofDouble__f_array).get(index)
});
$c_scm_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcDI$sp__I__D(index)
});
$c_scm_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
  return this.apply$mcDI$sp__I__D(i)
});
$c_scm_ArraySeq$ofDouble.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofDouble__f_array
});
function $as_scm_ArraySeq$ofDouble(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofDouble"))
}
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofDouble)))
}
function $asArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofDouble(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofDouble;", depth))
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().initClass({
  scm_ArraySeq$ofDouble: 0
}, false, "scala.collection.mutable.ArraySeq$ofDouble", {
  scm_ArraySeq$ofDouble: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofDouble.prototype.$classData = $d_scm_ArraySeq$ofDouble;
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.scm_ArraySeq$ofFloat__f_array = null;
  this.scm_ArraySeq$ofFloat__f_array = array
}
$c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofFloat.prototype.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofFloat.prototype = $c_scm_ArraySeq$ofFloat.prototype;
$c_scm_ArraySeq$ofFloat.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofFloat__f_array).u.length
});
$c_scm_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofFloat__f_array;
  return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var x2 = $as_scm_ArraySeq$ofFloat(that);
    var a = this.scm_ArraySeq$ofFloat__f_array;
    var b = $n(x2).scm_ArraySeq$ofFloat__f_array;
    return $m_ju_Arrays$().equals__AF__AF__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.scm_ArraySeq$ofFloat__f_array)
});
$c_scm_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(index) {
  return $n(this.scm_ArraySeq$ofFloat__f_array).get(index)
});
$c_scm_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcFI$sp__I__F(index)
});
$c_scm_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
  return this.apply$mcFI$sp__I__F(i)
});
$c_scm_ArraySeq$ofFloat.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofFloat__f_array
});
function $as_scm_ArraySeq$ofFloat(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofFloat"))
}
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofFloat)))
}
function $asArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofFloat(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofFloat;", depth))
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().initClass({
  scm_ArraySeq$ofFloat: 0
}, false, "scala.collection.mutable.ArraySeq$ofFloat", {
  scm_ArraySeq$ofFloat: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofFloat.prototype.$classData = $d_scm_ArraySeq$ofFloat;
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.scm_ArraySeq$ofInt__f_array = null;
  this.scm_ArraySeq$ofInt__f_array = array
}
$c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofInt.prototype.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofInt.prototype = $c_scm_ArraySeq$ofInt.prototype;
$c_scm_ArraySeq$ofInt.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofInt__f_array).u.length
});
$c_scm_ArraySeq$ofInt.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofInt__f_array;
  return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofInt)) {
    var x2 = $as_scm_ArraySeq$ofInt(that);
    var a = this.scm_ArraySeq$ofInt__f_array;
    var b = $n(x2).scm_ArraySeq$ofInt__f_array;
    return $m_ju_Arrays$().equals__AI__AI__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.scm_ArraySeq$ofInt__f_array)
});
$c_scm_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(index) {
  return $n(this.scm_ArraySeq$ofInt__f_array).get(index)
});
$c_scm_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcII$sp__I__I(index)
});
$c_scm_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i)
});
$c_scm_ArraySeq$ofInt.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofInt__f_array
});
function $as_scm_ArraySeq$ofInt(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofInt"))
}
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofInt)))
}
function $asArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofInt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofInt;", depth))
}
var $d_scm_ArraySeq$ofInt = new $TypeData().initClass({
  scm_ArraySeq$ofInt: 0
}, false, "scala.collection.mutable.ArraySeq$ofInt", {
  scm_ArraySeq$ofInt: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofInt.prototype.$classData = $d_scm_ArraySeq$ofInt;
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.scm_ArraySeq$ofLong__f_array = null;
  this.scm_ArraySeq$ofLong__f_array = array
}
$c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofLong.prototype.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofLong.prototype = $c_scm_ArraySeq$ofLong.prototype;
$c_scm_ArraySeq$ofLong.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofLong__f_array).u.length
});
$c_scm_ArraySeq$ofLong.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofLong__f_array;
  return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofLong)) {
    var x2 = $as_scm_ArraySeq$ofLong(that);
    var a = this.scm_ArraySeq$ofLong__f_array;
    var b = $n(x2).scm_ArraySeq$ofLong__f_array;
    return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.scm_ArraySeq$ofLong__f_array)
});
$c_scm_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(index) {
  return $n(this.scm_ArraySeq$ofLong__f_array).get(index)
});
$c_scm_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.apply$mcJI$sp__I__J(index)
});
$c_scm_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
  return this.apply$mcJI$sp__I__J(i)
});
$c_scm_ArraySeq$ofLong.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofLong__f_array
});
function $as_scm_ArraySeq$ofLong(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofLong"))
}
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofLong)))
}
function $asArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofLong;", depth))
}
var $d_scm_ArraySeq$ofLong = new $TypeData().initClass({
  scm_ArraySeq$ofLong: 0
}, false, "scala.collection.mutable.ArraySeq$ofLong", {
  scm_ArraySeq$ofLong: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofLong.prototype.$classData = $d_scm_ArraySeq$ofLong;
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.scm_ArraySeq$ofRef__f_array = null;
  this.scm_ArraySeq$ofRef__f_array = array
}
$c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofRef.prototype.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofRef.prototype = $c_scm_ArraySeq$ofRef.prototype;
$c_scm_ArraySeq$ofRef.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofRef__f_array).u.length
});
$c_scm_ArraySeq$ofRef.prototype.apply__I__O = (function(index) {
  return $n(this.scm_ArraySeq$ofRef__f_array).get(index)
});
$c_scm_ArraySeq$ofRef.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofRef__f_array;
  return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofRef)) {
    var x2 = $as_scm_ArraySeq$ofRef(that);
    return $m_s_Array$().equals__AO__AO__Z(this.scm_ArraySeq$ofRef__f_array, $n(x2).scm_ArraySeq$ofRef__f_array)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.scm_ArraySeq$ofRef__f_array)
});
$c_scm_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
$c_scm_ArraySeq$ofRef.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofRef__f_array
});
function $as_scm_ArraySeq$ofRef(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofRef"))
}
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofRef)))
}
function $asArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofRef;", depth))
}
var $d_scm_ArraySeq$ofRef = new $TypeData().initClass({
  scm_ArraySeq$ofRef: 0
}, false, "scala.collection.mutable.ArraySeq$ofRef", {
  scm_ArraySeq$ofRef: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofRef.prototype.$classData = $d_scm_ArraySeq$ofRef;
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.scm_ArraySeq$ofShort__f_array = null;
  this.scm_ArraySeq$ofShort__f_array = array
}
$c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofShort.prototype.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofShort.prototype = $c_scm_ArraySeq$ofShort.prototype;
$c_scm_ArraySeq$ofShort.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofShort__f_array).u.length
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__S = (function(index) {
  return $n(this.scm_ArraySeq$ofShort__f_array).get(index)
});
$c_scm_ArraySeq$ofShort.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofShort__f_array;
  return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofShort)) {
    var x2 = $as_scm_ArraySeq$ofShort(that);
    var a = this.scm_ArraySeq$ofShort__f_array;
    var b = $n(x2).scm_ArraySeq$ofShort__f_array;
    return $m_ju_Arrays$().equals__AS__AS__Z(a, b)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.scm_ArraySeq$ofShort__f_array)
});
$c_scm_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
  return this.apply__I__S($uI(v1))
});
$c_scm_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
  return this.apply__I__S(i)
});
$c_scm_ArraySeq$ofShort.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofShort__f_array
});
function $as_scm_ArraySeq$ofShort(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofShort"))
}
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofShort)))
}
function $asArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofShort(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofShort;", depth))
}
var $d_scm_ArraySeq$ofShort = new $TypeData().initClass({
  scm_ArraySeq$ofShort: 0
}, false, "scala.collection.mutable.ArraySeq$ofShort", {
  scm_ArraySeq$ofShort: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofShort.prototype.$classData = $d_scm_ArraySeq$ofShort;
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.scm_ArraySeq$ofUnit__f_array = null;
  this.scm_ArraySeq$ofUnit__f_array = array
}
$c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$c_scm_ArraySeq$ofUnit.prototype.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
  /*<skip>*/
}
$h_scm_ArraySeq$ofUnit.prototype = $c_scm_ArraySeq$ofUnit.prototype;
$c_scm_ArraySeq$ofUnit.prototype.length__I = (function() {
  return $n(this.scm_ArraySeq$ofUnit__f_array).u.length
});
$c_scm_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.scm_ArraySeq$ofUnit__f_array;
  return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
});
$c_scm_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofUnit)) {
    var x2 = $as_scm_ArraySeq$ofUnit(that);
    return ($n(this.scm_ArraySeq$ofUnit__f_array).u.length === $n($n(x2).scm_ArraySeq$ofUnit__f_array).u.length)
  } else {
    return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
  }
});
$c_scm_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.scm_ArraySeq$ofUnit__f_array)
});
$c_scm_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(index) {
  $n(this.scm_ArraySeq$ofUnit__f_array).get(index)
});
$c_scm_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  this.apply$mcVI$sp__I__V(index)
});
$c_scm_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
  this.apply$mcVI$sp__I__V(i)
});
$c_scm_ArraySeq$ofUnit.prototype.array__O = (function() {
  return this.scm_ArraySeq$ofUnit__f_array
});
function $as_scm_ArraySeq$ofUnit(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofUnit"))
}
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofUnit)))
}
function $asArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofUnit(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofUnit;", depth))
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().initClass({
  scm_ArraySeq$ofUnit: 0
}, false, "scala.collection.mutable.ArraySeq$ofUnit", {
  scm_ArraySeq$ofUnit: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofUnit.prototype.$classData = $d_scm_ArraySeq$ofUnit;
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
  /*<skip>*/
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"))
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth))
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1)
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
  /*<skip>*/
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index)
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index)
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"))
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)))
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth))
}
var $d_sci_Vector1 = new $TypeData().initClass({
  sci_Vector1: 0
}, false, "scala.collection.immutable.Vector1", {
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector1.prototype.$classData = $d_sci_Vector1;
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
  /*<skip>*/
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1)
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next
});
var $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list")
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
  /*<skip>*/
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1))
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i)
});
var $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
  /*<skip>*/
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"))
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)))
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth))
}
var $d_sci_Vector2 = new $TypeData().initClass({
  sci_Vector2: 0
}, false, "scala.collection.immutable.Vector2", {
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector2.prototype.$classData = $d_sci_Vector2;
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
  /*<skip>*/
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"))
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)))
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth))
}
var $d_sci_Vector3 = new $TypeData().initClass({
  sci_Vector3: 0
}, false, "scala.collection.immutable.Vector3", {
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector3.prototype.$classData = $d_sci_Vector3;
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
  /*<skip>*/
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"))
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)))
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth))
}
var $d_sci_Vector4 = new $TypeData().initClass({
  sci_Vector4: 0
}, false, "scala.collection.immutable.Vector4", {
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector4.prototype.$classData = $d_sci_Vector4;
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
  /*<skip>*/
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))))
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"))
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)))
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth))
}
var $d_sci_Vector5 = new $TypeData().initClass({
  sci_Vector5: 0
}, false, "scala.collection.immutable.Vector5", {
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector5.prototype.$classData = $d_sci_Vector5;
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0)
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
  /*<skip>*/
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break
    }
    default: {
      throw new $c_s_MatchError(idx)
    }
  }
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))))
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2))
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3))
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4))
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5))
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index)
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
  }
});
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"))
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)))
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth))
}
var $d_sci_Vector6 = new $TypeData().initClass({
  sci_Vector6: 0
}, false, "scala.collection.immutable.Vector6", {
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector6.prototype.$classData = $d_sci_Vector6;
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  var str = $as_T(String.fromCharCode(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
  return this
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0)
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem))
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
function $as_scm_ListBuffer(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
  /*<skip>*/
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray"
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_Lapp_Main__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=main.js.map
