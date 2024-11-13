import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [discountCode, setDiscountCode] = useState('');
  const [applied, setApplied] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const price = 141800; // Trạng thái lưu số lượng sản phẩm

  // Hàm xử lý khi bấm nút tăng
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Hàm xử lý khi bấm nút giảm
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Sản phẩm */}
      <View style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source={{ uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg' }}  // Thay bằng link ảnh thực
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productSeller}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityValue}>{quantity}</Text>

            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize:10, color: "blue",  }}>Mua sau  </Text>
          </View>
        </View>
      </View>

      {/* Mã giảm giá */}
      <View style={styles.couponContainer}>
        <TextInput
          style={styles.couponInput}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <Button
          title="Áp dụng"
          onPress={() => setApplied(true)}
          color="#0066cc"
        />
      </View>

      {/* Bạn có phiếu quà tặng */}
      <View style={styles.giveContainer}>
        <Text style={{ fontWeight: "bold", fontSize:10 }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox ? </Text>
        <Text style={{ fontWeight: "bold", fontSize:10, color: "blue",  }}>Nhập tại đây ? </Text>
      </View>

      {/* Phí tạm tính */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tạm tính</Text>  
        <Text style={styles.totalPrice}>{(price * quantity).toLocaleString()} đ</Text>
      </View>

      <View style={styles.footer}>
        {/* Thành tiền */}
        <View style={styles.finalTotalContainer}>
          <Text style={styles.finalTotalText}>Thành tiền</Text>
          <Text style={styles.finalTotalPrice}>{(price * quantity).toLocaleString()} đ</Text>
        </View>

        {/* Nút đặt hàng */}
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 16,
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productSeller: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e53935',
  },
  couponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
  },
  giveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalText: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
    color: '#e53935',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  finalTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  finalTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  finalTotalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
  },
  orderButton: {
    backgroundColor: '#ff3d00',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
