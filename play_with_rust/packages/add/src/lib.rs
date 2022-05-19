#[cfg(test)]
mod tests {
  use crate::add;

  #[test]
  fn it_works() {
    assert_eq!(add(1, 2), 3);
  }
}

pub fn add(a: i32, b: i32) -> i32 {
  a + b
}
