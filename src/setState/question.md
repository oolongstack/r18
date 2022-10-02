# 为什么setState设计成异步的
--- 大大挺高性能 将多次setState合并成一次，统一进行render和patch