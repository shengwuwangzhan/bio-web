接口：/question
请求的方法：POST
POST内容规定：{"question_id":xx, "question_type":xxx}
返回值规定：所有错误请求都会返回HTTP CODE 400， 
            1，当没有"question_id", "question_type"两项时，返回{'status':"error", "message":"Bad Request!"}
            2，当question_type值未在预先定义的五种类型（"AccidentHandling", "BasicSafe", "BiomaterialSafe", "InstrumentSafe", "ReagentSafe"）中时，返回{'status':'error', "message":"{} is not vaild type".format(question_type)}
            3，当question_id在对应type下不存在时，返回{'status':'error', 'message':"invalid id."}
            正确请求请自己尝试。