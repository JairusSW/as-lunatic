import { Result } from "../error";

// @ts-ignore: decorator
@external("lunatic::message", "create_data")
declare function create_data(tag: i64, capacity: u64): void;
// @ts-ignore: decorator
@external("lunatic::message", "write_data")
declare function write_data(data: usize /* *const u8 */, data_len: usize): usize;
// @ts-ignore: decorator
@external("lunatic::message", "read_data")
declare function read_data(data: usize /* *mut u8 */, data_len: usize): usize;
// @ts-ignore: decorator
@external("lunatic::message", "seek_data")
declare function seek_data(position: u64): void;
// @ts-ignore: decorator
@external("lunatic::message", "get_tag")
declare function get_tag(): i64;
// @ts-ignore: decorator
@external("lunatic::message", "data_size")
declare function data_size(): u64;
// @ts-ignore: decorator
@external("lunatic::message", "push_process")
declare function push_process(process_id: u64): u64;
// @ts-ignore: decorator
@external("lunatic::message", "take_process")
declare function take_process(index: u64): u64;
// @ts-ignore: decorator
@external("lunatic::message", "push_tcp_stream")
declare function push_tcp_stream(tcp_stream_id: u64): u64;
// @ts-ignore: decorator
@external("lunatic::message", "take_tcp_stream")
declare function take_tcp_stream(index: u64): u64;
// @ts-ignore: decorator
@external("lunatic::message", "send")
declare function send(process_id: u64): void;
// @ts-ignore: decorator
@external("lunatic::message", "send_receive_skip_search")
declare function send_receive_skip_search(process_id: u64, timeout: u32): u32;
// @ts-ignore: decorator
@external("lunatic::message", "receive")
declare function receive(tag: usize /* *const i64 */, tag_len: usize, timeout: u32): u32;

export class Mailbox<T> {
  constructor() {
    if (isReference<T>() && !isNullable<T>()) {
      ERROR("Mailbox type parameter must be nullable if T is a reference.");
    }
  }
}
