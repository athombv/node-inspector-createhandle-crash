# How to reproduce
Clone this repo to your local computer.
Make sure you are running node 8.9.2 (Although I could reproduce this bug in both node 8 and node 9)
Run `npm install`

Now you can run the program by calling 
```
npm start
```
Now you should open chrome and go to `chrome://inspect` and inspect `test.js`
This should produce the following crash:
```
FATAL ERROR: v8::HandleScope::CreateHandle() Cannot create a handle without a HandleScope
 1: node::Abort() [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 2: node::FatalException(v8::Isolate*, v8::Local<v8::Value>, v8::Local<v8::Message>) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 3: v8::Utils::ReportApiFailure(char const*, char const*) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 4: v8::internal::HandleScope::Extend(v8::internal::Isolate*) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 5: v8::HandleScope::CreateHandle(v8::internal::Isolate*, v8::internal::Object*) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 6: node::inspector::Agent::EnableAsyncHook() [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 7: v8_inspector::V8Debugger::setAsyncCallStackDepth(v8_inspector::V8DebuggerAgentImpl*, int) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 8: v8_inspector::V8DebuggerAgentImpl::setAsyncCallStackDepth(int) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
 9: v8_inspector::protocol::Debugger::DispatcherImpl::setAsyncCallStackDepth(int, std::__1::unique_ptr<v8_inspector::protocol::DictionaryValue, std::__1::default_delete<v8_inspector::protocol::DictionaryValue> >, v8_inspector::protocol::ErrorSupport*) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
10: v8_inspector::protocol::Debugger::DispatcherImpl::dispatch(int, v8_inspector::String16 const&, std::__1::unique_ptr<v8_inspector::protocol::DictionaryValue, std::__1::default_delete<v8_inspector::protocol::DictionaryValue> >) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
11: v8_inspector::protocol::UberDispatcher::dispatch(std::__1::unique_ptr<v8_inspector::protocol::Value, std::__1::default_delete<v8_inspector::protocol::Value> >) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
12: v8_inspector::V8InspectorSessionImpl::dispatchProtocolMessage(v8_inspector::StringView const&) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
13: node::inspector::InspectorIo::DispatchMessages() [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
14: uv__async_io [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
15: uv__io_poll [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
16: uv_run [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
17: node::Start(v8::Isolate*, node::IsolateData*, int, char const* const*, int, char const* const*) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
18: node::Start(uv_loop_s*, int, char const* const*, int, char const* const*) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
19: node::Start(int, char**) [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
20: start [/Users/[user]/.nvm/versions/node/v8.9.2/bin/node]
21: 0x2
```