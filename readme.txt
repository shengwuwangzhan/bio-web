�ӿڣ�/question
����ķ�����POST
POST���ݹ涨��{"question_id":xx, "question_type":xxx}
����ֵ�涨�����д������󶼻᷵��HTTP CODE 400�� 
            1����û��"question_id", "question_type"����ʱ������{'status':"error", "message":"Bad Request!"}
            2����question_typeֵδ��Ԥ�ȶ�����������ͣ�"AccidentHandling", "BasicSafe", "BiomaterialSafe", "InstrumentSafe", "ReagentSafe"����ʱ������{'status':'error', "message":"{} is not vaild type".format(question_type)}
            3����question_id�ڶ�Ӧtype�²�����ʱ������{'status':'error', 'message':"invalid id."}
            ��ȷ�������Լ����ԡ�